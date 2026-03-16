# OTP Setup (Vercel API Routes)

OTP now uses **Vercel serverless API routes** (`/api/send-otp` and `/api/verify-otp`) instead of Supabase Edge Functions. Same-origin = no CORS issues.

## 1. Ensure `otp_verifications` table exists in Supabase

Run this in **Supabase Dashboard → SQL Editor**:

```sql
CREATE TABLE IF NOT EXISTS otp_verifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  phone TEXT NOT NULL,
  otp_code TEXT NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS idx_otp_verifications_phone ON otp_verifications(phone);
```

## 2. Add environment variables in Vercel

Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**. Add:

| Variable | Value | Notes |
|----------|-------|-------|
| `VITE_SUPABASE_URL` | `https://dalzojepblfyzhvdqizd.supabase.co` | Your Supabase URL |
| `SUPABASE_SERVICE_ROLE_KEY` | (from Supabase Settings → API) | **Keep secret!** Service role key, not anon |
| `TWILIO_ACCOUNT_SID` | (optional) | For SMS. Without it, OTP is logged in Vercel logs |
| `TWILIO_AUTH_TOKEN` | (optional) | For SMS |
| `TWILIO_PHONE_NUMBER` | e.g. `+1234567890` | Your Twilio number |

## 3. Deploy

Push to git. Vercel will auto-deploy. The `api/` folder is automatically deployed as serverless functions.

## 4. Testing without Twilio

Without Twilio credentials, OTPs are still generated and stored. Check **Vercel Dashboard → Your Project → Logs** (or Runtime Logs) to see the OTP when you click "Send OTP".
