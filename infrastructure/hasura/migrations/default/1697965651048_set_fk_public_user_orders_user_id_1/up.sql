alter table "public"."user_orders"
  add constraint "user_orders_user_id_1_fkey"
  foreign key ("user_id_1")
  references "public"."users"
  ("id") on update restrict on delete restrict;
