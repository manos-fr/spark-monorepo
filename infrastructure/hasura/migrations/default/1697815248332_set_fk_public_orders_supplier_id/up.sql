alter table "public"."orders"
  add constraint "orders_supplier_id_fkey"
  foreign key ("supplier_id")
  references "public"."users"
  ("id") on update restrict on delete restrict;
