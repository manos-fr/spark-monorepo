alter table "public"."suppliers" add column "created_at" timestamptz
 null default now();
