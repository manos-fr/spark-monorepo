alter table "public"."user_roles" drop constraint "user_roles_pkey";
alter table "public"."user_roles"
    add constraint "user_roles_pkey"
    primary key ("role_id", "user_id");
