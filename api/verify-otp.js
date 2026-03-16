import { createClient } from '@supabase/supabase-js';

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
    const { phone, otp } = req.body || {};
    if (!phone || !otp || typeof phone !== 'string' || typeof otp !== 'string') {
      return res.status(400).json({ error: 'Phone and OTP are required' });
    }

    const normalizedPhone = phone.replace(/\s/g, '');
    const code = otp.trim();

    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data: rows, error: fetchError } = await supabase
      .from('otp_verifications')
      .select('id, otp_code, expires_at, verified')
      .eq('phone', normalizedPhone)
      .order('created_at', { ascending: false })
      .limit(1);

    if (fetchError || !rows?.length) {
      return res.status(400).json({ error: 'Invalid or expired OTP' });
    }

    const record = rows[0];
    if (record.verified) {
      return res.status(400).json({ error: 'OTP already used' });
    }

    if (new Date(record.expires_at) < new Date()) {
      return res.status(400).json({ error: 'OTP expired' });
    }

    if (record.otp_code !== code) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    const { error: updateError } = await supabase
      .from('otp_verifications')
      .update({ verified: true })
      .eq('id', record.id);

    if (updateError) {
      return res.status(500).json({ error: 'Verification failed' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
