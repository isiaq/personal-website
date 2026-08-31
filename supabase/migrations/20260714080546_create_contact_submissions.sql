/*
# Create contact_submissions table (single-tenant, no auth)

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's reply-to email
  - `subject` (text, nullable) — optional subject line
  - `message` (text, not null) — the message body
  - `read` (boolean, default false) — owner-side read flag
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `contact_submissions`.
- This is a no-auth personal portfolio site. The public contact form lets any
  visitor submit a message, so INSERT is open to `anon, authenticated`.
  SELECT / UPDATE / DELETE are intentionally restricted to `authenticated`
  (the site owner, when signed in) so anonymous visitors cannot read or
  tamper with other people's submissions.

3. Notes
- The frontend inserts name/email/subject/message via the anon key.
- No user_id column — there are no accounts on this site.
- An index on `created_at` supports chronological admin listing.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  read boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public can submit messages (no auth on the site)
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only the signed-in owner can read, update, or delete submissions
DROP POLICY IF EXISTS "owner_select_contact" ON contact_submissions;
CREATE POLICY "owner_select_contact"
ON contact_submissions FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "owner_update_contact" ON contact_submissions;
CREATE POLICY "owner_update_contact"
ON contact_submissions FOR UPDATE
TO authenticated
USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "owner_delete_contact" ON contact_submissions;
CREATE POLICY "owner_delete_contact"
ON contact_submissions FOR DELETE
TO authenticated
USING (true);

CREATE INDEX IF NOT EXISTS contact_submissions_created_at_idx
ON contact_submissions (created_at DESC);
