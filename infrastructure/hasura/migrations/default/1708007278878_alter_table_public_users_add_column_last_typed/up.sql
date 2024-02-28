alter table "public"."users" add column "last_typed" timestamptz
 not null default now();
