CREATE OR REPLACE VIEW public."user_online" AS
SELECT "users".id,
  "users".name,
  "users".last_typed,
  "users".last_seen
FROM "users"
WHERE ("users".last_seen > (now() - '00:00:10'::interval));
