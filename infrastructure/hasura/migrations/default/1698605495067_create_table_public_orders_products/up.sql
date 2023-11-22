CREATE TABLE "public"."orders_products" ("id" serial NOT NULL, "order_id" integer NOT NULL, "product_id" integer NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id","order_id","product_id") , FOREIGN KEY ("order_id") REFERENCES "public"."orders"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("product_id") REFERENCES "public"."products"("id") ON UPDATE restrict ON DELETE restrict);
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_orders_products_updated_at"
BEFORE UPDATE ON "public"."orders_products"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_orders_products_updated_at" ON "public"."orders_products"
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
