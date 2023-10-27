BEGIN TRANSACTION;
ALTER TABLE "public"."user_roles" DROP CONSTRAINT "user_roles_pkey";

ALTER TABLE "public"."user_roles"
    ADD CONSTRAINT "user_roles_pkey" PRIMARY KEY ("role_id", "user_id", "id");
COMMIT TRANSACTION;
