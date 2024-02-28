CREATE OR REPLACE VIEW public."user_typing" AS
SELECT "users".id,
  "users".name,
  "users".last_typed,
  "users".last_seen
FROM "users"
WHERE ("users".last_typed > (now() - '00:00:02'::interval));
