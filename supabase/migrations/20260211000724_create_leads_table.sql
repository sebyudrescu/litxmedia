/*
  # Create leads table for contact form submissions

  1. New Tables
    - `leads`
      - `id` (uuid, primary key) - Unique identifier for each lead
      - `name` (text, not null) - Full name of the person
      - `email` (text, not null) - Email address
      - `phone` (text) - Phone number (optional)
      - `service` (text) - Service they're interested in
      - `message` (text) - Their message
      - `created_at` (timestamptz) - When the lead was submitted

  2. Security
    - Enable RLS on `leads` table
    - Add INSERT policy for anonymous users (anyone can submit the form)
    - No SELECT/UPDATE/DELETE policies for anonymous users (data is protected)
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  service text DEFAULT '',
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
