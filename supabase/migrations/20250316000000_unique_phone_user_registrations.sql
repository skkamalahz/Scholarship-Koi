-- Ensure one phone number can only register once (run in Supabase SQL Editor if duplicates exist, clean them first)
CREATE UNIQUE INDEX IF NOT EXISTS user_registrations_phone_unique ON user_registrations(phone);
