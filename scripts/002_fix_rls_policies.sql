-- Drop the problematic admin policy that causes infinite recursion
DROP POLICY IF EXISTS "Admins can read all users" ON public.users;

-- Simplified RLS policies to avoid infinite recursion
-- Allow authenticated users to read all user profiles (public information)
CREATE POLICY "Authenticated users can read all users" ON public.users
  FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Keep the self-update policy
-- Users can update their own data (already exists, this is a safety check)
DROP POLICY IF EXISTS "Users can update own data" ON public.users;
CREATE POLICY "Users can update own data" ON public.users
  FOR UPDATE
  USING (auth.uid()::text = id::text);

-- Keep the insert policy for signup
-- Anyone can insert (already exists, this is a safety check)
DROP POLICY IF EXISTS "Anyone can insert user" ON public.users;
CREATE POLICY "Anyone can insert user" ON public.users
  FOR INSERT
  WITH CHECK (true);

-- Remove the self-read policy since we now allow all authenticated users to read
DROP POLICY IF EXISTS "Users can read own data" ON public.users;
