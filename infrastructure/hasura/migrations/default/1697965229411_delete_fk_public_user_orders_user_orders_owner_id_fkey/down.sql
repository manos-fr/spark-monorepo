alter table "public"."user_orders"
  add constraint "user_orders_owner_id_fkey"
  foreign key ("owner_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
