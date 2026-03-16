import { createClient } from '@supabase/supabase-js';

function generateOtp() {
  return String(Math.floor(100000 + Math.random() * 900000));
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { phone } = req.body || {};
    if (!phone || typeof phone !== 'string') {
      return res.status(400).json({ error: 'Phone number is required' });
    }

    const normalizedPhone = phone.replace(/\s/g, '');
    const otp = generateOtp();
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000);

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing env: VITE_SUPABASE_URL/SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
      return res.status(500).json({
        error: 'Server configuration error',
        hint: 'Add VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in Vercel Environment Variables',
      });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: existing } = await supabase
      .from('user_registrations')
      .select('id')
      .eq('phone', normalizedPhone)
      .limit(1)
      .single();

    if (existing) {
      return res.status(400).json({ error: 'This number is already registered.' });
    }

    const { error: insertError } = await supabase.from('otp_verifications').insert({
      phone: normalizedPhone,
      otp_code: otp,
      expires_at: expiresAt.toISOString(),
      verified: false,
    });

    if (insertError) {
      console.error('DB insert error:', insertError);
      const hint = insertError.code === '42P01' ? 'Create otp_verifications table in Supabase SQL Editor' : 'Check Supabase connection';
      return res.status(500).json({ error: 'Failed to store OTP', hint });
    }

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (accountSid && authToken && fromNumber) {
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;
      const body = new URLSearchParams({
        To: normalizedPhone,
        From: fromNumber,
        Body: `Your Scholarship Koi verification code is: ${otp}. Valid for 10 minutes.`,
      });

      const twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          Authorization: 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body.toString(),
      });

      if (!twilioRes.ok) {
        const errText = await twilioRes.text();
        console.error('Twilio error:', errText);
        return res.status(500).json({ error: 'Failed to send SMS' });
      }
    } else {
      console.log('[DEV] Twilio not configured. OTP for', normalizedPhone, ':', otp);
    }

    return res.status(200).json({
      success: true,
      ...(!(accountSid && authToken && fromNumber) ? { otp } : {}),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
