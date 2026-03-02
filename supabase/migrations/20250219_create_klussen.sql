-- Run this in Supabase SQL Editor: https://awretlrkxzfirbuyaekz.supabase.co

CREATE TABLE IF NOT EXISTS public.klussen (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  category text NOT NULL,
  description text NOT NULL,
  postcode text NOT NULL,
  naam text NOT NULL,
  telefoon text NOT NULL,
  user_agent text,
  source text DEFAULT 'landing_page'
);

COMMENT ON TABLE public.klussen IS 'Job postings from handyman finder form';

ALTER TABLE public.klussen ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow anonymous inserts on klussen" ON public.klussen;
CREATE POLICY "Allow anonymous inserts on klussen"
  ON public.klussen
  FOR INSERT
  TO anon
  WITH CHECK (true);
