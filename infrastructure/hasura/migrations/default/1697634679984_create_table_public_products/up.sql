CREATE TABLE "public"."products" ("id" serial NOT NULL, "name" text NOT NULL, "description" text NOT NULL, "category" text NOT NULL, "user_id" integer NOT NULL, PRIMARY KEY ("id") , UNIQUE ("id"));
