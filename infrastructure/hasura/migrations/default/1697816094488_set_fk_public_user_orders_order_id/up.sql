alter table "public"."user_orders"
  add constraint "user_orders_order_id_fkey"
  foreign key ("order_id")
  references "public"."orders"
  ("id") on update restrict on delete restrict;
