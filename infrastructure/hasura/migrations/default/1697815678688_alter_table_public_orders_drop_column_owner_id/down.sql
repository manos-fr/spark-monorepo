alter table "public"."orders"
  add constraint "orders_owner_id_fkey"
  foreign key (owner_id)
  references "public"."users"
  (id) on update restrict on delete restrict;
alter table "public"."orders" alter column "owner_id" drop not null;
alter table "public"."orders" add column "owner_id" int4;
