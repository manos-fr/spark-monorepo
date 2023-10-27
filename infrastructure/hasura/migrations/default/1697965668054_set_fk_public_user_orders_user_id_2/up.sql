alter table "public"."user_orders"
  add constraint "user_orders_user_id_2_fkey"
  foreign key ("user_id_2")
  references "public"."users"
  ("id") on update restrict on delete restrict;
