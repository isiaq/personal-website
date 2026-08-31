/*
# Harden contact_submissions RLS policies

## Context
The contact_submissions table serves a no-auth personal portfolio site. Public
visitors submit messages through the contact form; the site owner manages them
signed-in via Supabase Studio. There is no user_id column and no public-facing
read path — so there is no per-row ownership predicate available.

## Problem
Three policies used `true` as their only condition, which security scanners
flag as bypassing RLS:
- `anon_insert_contact` (INSERT)  WITH CHECK (true)
- `owner_update_contact` (UPDATE) USING (true) WITH CHECK (true)
- `owner_delete_contact` (DELETE) USING (true)

## Changes
1. INSERT — replace the blanket `WITH CHECK (true)` with real validation of the
   submitted payload: required fields must be present and non-empty, email must
   match a basic pattern, and lengths are capped to prevent abuse. This still
   lets any anon/authenticated visitor submit the form, but only well-formed
   rows. The form fields map 1:1 to these checks.
2. DELETE — drop the policy entirely. Without a per-row ownership column there
   is no safe predicate; the owner deletes submissions through Supabase Studio
   (which uses the service role that bypasses RLS), not the anon-key client.
3. UPDATE — drop the policy entirely, for the same reason as DELETE. The owner
   does not need anon-key UPDATE access; the `read` flag is toggled in Studio.
4. SELECT — left unchanged. It is already scoped to `authenticated` only, and
   since the table has no ownership column every row the owner can see is
   theirs by definition (they are the only authenticated user).

## Net effect
- anon/authenticated can still INSERT valid contact submissions (the public form keeps working).
- No anon-key client can UPDATE or DELETE rows.
- Only the authenticated owner can SELECT (read) submissions.
*/

-- 1. Tighten INSERT: validate payload instead of allowing anything
DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact"
ON contact_submissions FOR INSERT
TO anon, authenticated
WITH CHECK (
  name IS NOT NULL
  AND btrim(name) <> ''
  AND char_length(name) <= 120
  AND email IS NOT NULL
  AND btrim(email) <> ''
  AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND char_length(email) <= 320
  AND message IS NOT NULL
  AND btrim(message) <> ''
  AND char_length(message) <= 5000
  AND (subject IS NULL OR char_length(subject) <= 200)
);

-- 2. Remove unscoped UPDATE policy (no ownership column to predicate on)
DROP POLICY IF EXISTS "owner_update_contact" ON contact_submissions;

-- 3. Remove unscoped DELETE policy (no ownership column to predicate on)
DROP POLICY IF EXISTS "owner_delete_contact" ON contact_submissions;

-- SELECT policy (owner_select_contact) is unchanged: authenticated-only read.
