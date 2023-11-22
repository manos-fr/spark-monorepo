alter table "public"."user_orders"
  add constraint "user_orders_supplier_id_fkey"
  foreign key ("supplier_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
