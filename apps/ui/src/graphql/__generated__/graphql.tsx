import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  jsonb: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

export type Jsonb_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  _cast?: InputMaybe<Jsonb_Cast_Exp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']['input']>;
  _eq?: InputMaybe<Scalars['jsonb']['input']>;
  _gt?: InputMaybe<Scalars['jsonb']['input']>;
  _gte?: InputMaybe<Scalars['jsonb']['input']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']['input']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']['input']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']['input']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['jsonb']['input']>;
  _lte?: InputMaybe<Scalars['jsonb']['input']>;
  _neq?: InputMaybe<Scalars['jsonb']['input']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']['input']>>;
};

/** columns and relationships of "messages" */
export type Messages = {
  __typename?: 'messages';
  id: Scalars['Int']['output'];
  text: Scalars['String']['output'];
  timestamp: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "messages" */
export type Messages_Aggregate = {
  __typename?: 'messages_aggregate';
  aggregate?: Maybe<Messages_Aggregate_Fields>;
  nodes: Array<Messages>;
};

export type Messages_Aggregate_Bool_Exp = {
  count?: InputMaybe<Messages_Aggregate_Bool_Exp_Count>;
};

export type Messages_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Messages_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "messages" */
export type Messages_Aggregate_Fields = {
  __typename?: 'messages_aggregate_fields';
  avg?: Maybe<Messages_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Messages_Max_Fields>;
  min?: Maybe<Messages_Min_Fields>;
  stddev?: Maybe<Messages_Stddev_Fields>;
  stddev_pop?: Maybe<Messages_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Messages_Stddev_Samp_Fields>;
  sum?: Maybe<Messages_Sum_Fields>;
  var_pop?: Maybe<Messages_Var_Pop_Fields>;
  var_samp?: Maybe<Messages_Var_Samp_Fields>;
  variance?: Maybe<Messages_Variance_Fields>;
};


/** aggregate fields of "messages" */
export type Messages_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Messages_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "messages" */
export type Messages_Aggregate_Order_By = {
  avg?: InputMaybe<Messages_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Messages_Max_Order_By>;
  min?: InputMaybe<Messages_Min_Order_By>;
  stddev?: InputMaybe<Messages_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Messages_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Messages_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Messages_Sum_Order_By>;
  var_pop?: InputMaybe<Messages_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Messages_Var_Samp_Order_By>;
  variance?: InputMaybe<Messages_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "messages" */
export type Messages_Arr_Rel_Insert_Input = {
  data: Array<Messages_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};

/** aggregate avg on columns */
export type Messages_Avg_Fields = {
  __typename?: 'messages_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "messages" */
export type Messages_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "messages". All fields are combined with a logical 'AND'. */
export type Messages_Bool_Exp = {
  _and?: InputMaybe<Array<Messages_Bool_Exp>>;
  _not?: InputMaybe<Messages_Bool_Exp>;
  _or?: InputMaybe<Array<Messages_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  text?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "messages" */
export enum Messages_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagesPkey = 'messages_pkey'
}

/** input type for incrementing numeric columns in table "messages" */
export type Messages_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "messages" */
export type Messages_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type Messages_Max_Fields = {
  __typename?: 'messages_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "messages" */
export type Messages_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Messages_Min_Fields = {
  __typename?: 'messages_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  timestamp?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "messages" */
export type Messages_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "messages" */
export type Messages_Mutation_Response = {
  __typename?: 'messages_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Messages>;
};

/** on_conflict condition type for table "messages" */
export type Messages_On_Conflict = {
  constraint: Messages_Constraint;
  update_columns?: Array<Messages_Update_Column>;
  where?: InputMaybe<Messages_Bool_Exp>;
};

/** Ordering options when selecting data from "messages". */
export type Messages_Order_By = {
  id?: InputMaybe<Order_By>;
  text?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: messages */
export type Messages_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "messages" */
export enum Messages_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "messages" */
export type Messages_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Messages_Stddev_Fields = {
  __typename?: 'messages_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "messages" */
export type Messages_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Messages_Stddev_Pop_Fields = {
  __typename?: 'messages_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "messages" */
export type Messages_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Messages_Stddev_Samp_Fields = {
  __typename?: 'messages_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "messages" */
export type Messages_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "messages" */
export type Messages_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Messages_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Messages_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Messages_Sum_Fields = {
  __typename?: 'messages_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "messages" */
export type Messages_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "messages" */
export enum Messages_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Text = 'text',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  UserId = 'user_id'
}

export type Messages_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Messages_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Messages_Set_Input>;
  /** filter the rows which have to be updated */
  where: Messages_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Messages_Var_Pop_Fields = {
  __typename?: 'messages_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "messages" */
export type Messages_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Messages_Var_Samp_Fields = {
  __typename?: 'messages_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "messages" */
export type Messages_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Messages_Variance_Fields = {
  __typename?: 'messages_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "messages" */
export type Messages_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "messages" */
  delete_messages?: Maybe<Messages_Mutation_Response>;
  /** delete single row from the table: "messages" */
  delete_messages_by_pk?: Maybe<Messages>;
  /** delete data from the table: "orders" */
  delete_orders?: Maybe<Orders_Mutation_Response>;
  /** delete single row from the table: "orders" */
  delete_orders_by_pk?: Maybe<Orders>;
  /** delete data from the table: "orders_products" */
  delete_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** delete single row from the table: "orders_products" */
  delete_orders_products_by_pk?: Maybe<Orders_Products>;
  /** delete data from the table: "products" */
  delete_products?: Maybe<Products_Mutation_Response>;
  /** delete single row from the table: "products" */
  delete_products_by_pk?: Maybe<Products>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "user_online" */
  delete_user_online?: Maybe<User_Online_Mutation_Response>;
  /** delete data from the table: "user_orders" */
  delete_user_orders?: Maybe<User_Orders_Mutation_Response>;
  /** delete single row from the table: "user_orders" */
  delete_user_orders_by_pk?: Maybe<User_Orders>;
  /** delete data from the table: "user_relationships" */
  delete_user_relationships?: Maybe<User_Relationships_Mutation_Response>;
  /** delete single row from the table: "user_relationships" */
  delete_user_relationships_by_pk?: Maybe<User_Relationships>;
  /** delete data from the table: "user_roles" */
  delete_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** delete single row from the table: "user_roles" */
  delete_user_roles_by_pk?: Maybe<User_Roles>;
  /** delete data from the table: "user_typing" */
  delete_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "messages" */
  insert_messages?: Maybe<Messages_Mutation_Response>;
  /** insert a single row into the table: "messages" */
  insert_messages_one?: Maybe<Messages>;
  /** insert data into the table: "orders" */
  insert_orders?: Maybe<Orders_Mutation_Response>;
  /** insert a single row into the table: "orders" */
  insert_orders_one?: Maybe<Orders>;
  /** insert data into the table: "orders_products" */
  insert_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** insert a single row into the table: "orders_products" */
  insert_orders_products_one?: Maybe<Orders_Products>;
  /** insert data into the table: "products" */
  insert_products?: Maybe<Products_Mutation_Response>;
  /** insert a single row into the table: "products" */
  insert_products_one?: Maybe<Products>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "user_online" */
  insert_user_online?: Maybe<User_Online_Mutation_Response>;
  /** insert a single row into the table: "user_online" */
  insert_user_online_one?: Maybe<User_Online>;
  /** insert data into the table: "user_orders" */
  insert_user_orders?: Maybe<User_Orders_Mutation_Response>;
  /** insert a single row into the table: "user_orders" */
  insert_user_orders_one?: Maybe<User_Orders>;
  /** insert data into the table: "user_relationships" */
  insert_user_relationships?: Maybe<User_Relationships_Mutation_Response>;
  /** insert a single row into the table: "user_relationships" */
  insert_user_relationships_one?: Maybe<User_Relationships>;
  /** insert data into the table: "user_roles" */
  insert_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** insert a single row into the table: "user_roles" */
  insert_user_roles_one?: Maybe<User_Roles>;
  /** insert data into the table: "user_typing" */
  insert_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** insert a single row into the table: "user_typing" */
  insert_user_typing_one?: Maybe<User_Typing>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "messages" */
  update_messages?: Maybe<Messages_Mutation_Response>;
  /** update single row of the table: "messages" */
  update_messages_by_pk?: Maybe<Messages>;
  /** update multiples rows of table: "messages" */
  update_messages_many?: Maybe<Array<Maybe<Messages_Mutation_Response>>>;
  /** update data of the table: "orders" */
  update_orders?: Maybe<Orders_Mutation_Response>;
  /** update single row of the table: "orders" */
  update_orders_by_pk?: Maybe<Orders>;
  /** update multiples rows of table: "orders" */
  update_orders_many?: Maybe<Array<Maybe<Orders_Mutation_Response>>>;
  /** update data of the table: "orders_products" */
  update_orders_products?: Maybe<Orders_Products_Mutation_Response>;
  /** update single row of the table: "orders_products" */
  update_orders_products_by_pk?: Maybe<Orders_Products>;
  /** update multiples rows of table: "orders_products" */
  update_orders_products_many?: Maybe<Array<Maybe<Orders_Products_Mutation_Response>>>;
  /** update data of the table: "products" */
  update_products?: Maybe<Products_Mutation_Response>;
  /** update single row of the table: "products" */
  update_products_by_pk?: Maybe<Products>;
  /** update multiples rows of table: "products" */
  update_products_many?: Maybe<Array<Maybe<Products_Mutation_Response>>>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update multiples rows of table: "roles" */
  update_roles_many?: Maybe<Array<Maybe<Roles_Mutation_Response>>>;
  /** update data of the table: "user_online" */
  update_user_online?: Maybe<User_Online_Mutation_Response>;
  /** update multiples rows of table: "user_online" */
  update_user_online_many?: Maybe<Array<Maybe<User_Online_Mutation_Response>>>;
  /** update data of the table: "user_orders" */
  update_user_orders?: Maybe<User_Orders_Mutation_Response>;
  /** update single row of the table: "user_orders" */
  update_user_orders_by_pk?: Maybe<User_Orders>;
  /** update multiples rows of table: "user_orders" */
  update_user_orders_many?: Maybe<Array<Maybe<User_Orders_Mutation_Response>>>;
  /** update data of the table: "user_relationships" */
  update_user_relationships?: Maybe<User_Relationships_Mutation_Response>;
  /** update single row of the table: "user_relationships" */
  update_user_relationships_by_pk?: Maybe<User_Relationships>;
  /** update multiples rows of table: "user_relationships" */
  update_user_relationships_many?: Maybe<Array<Maybe<User_Relationships_Mutation_Response>>>;
  /** update data of the table: "user_roles" */
  update_user_roles?: Maybe<User_Roles_Mutation_Response>;
  /** update single row of the table: "user_roles" */
  update_user_roles_by_pk?: Maybe<User_Roles>;
  /** update multiples rows of table: "user_roles" */
  update_user_roles_many?: Maybe<Array<Maybe<User_Roles_Mutation_Response>>>;
  /** update data of the table: "user_typing" */
  update_user_typing?: Maybe<User_Typing_Mutation_Response>;
  /** update multiples rows of table: "user_typing" */
  update_user_typing_many?: Maybe<Array<Maybe<User_Typing_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MessagesArgs = {
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Messages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_OrdersArgs = {
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_Orders_ProductsArgs = {
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Orders_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
  order_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ProductsArgs = {
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_OnlineArgs = {
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_OrdersArgs = {
  where: User_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Orders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RelationshipsArgs = {
  where: User_Relationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Relationships_By_PkArgs = {
  id: Scalars['Int']['input'];
  owner_id: Scalars['Int']['input'];
  supplier_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_RolesArgs = {
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Roles_By_PkArgs = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootDelete_User_TypingArgs = {
  where: User_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_MessagesArgs = {
  objects: Array<Messages_Insert_Input>;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Messages_OneArgs = {
  object: Messages_Insert_Input;
  on_conflict?: InputMaybe<Messages_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrdersArgs = {
  objects: Array<Orders_Insert_Input>;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_OneArgs = {
  object: Orders_Insert_Input;
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_ProductsArgs = {
  objects: Array<Orders_Products_Insert_Input>;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Orders_Products_OneArgs = {
  object: Orders_Products_Insert_Input;
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ProductsArgs = {
  objects: Array<Products_Insert_Input>;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Products_OneArgs = {
  object: Products_Insert_Input;
  on_conflict?: InputMaybe<Products_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OnlineArgs = {
  objects: Array<User_Online_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Online_OneArgs = {
  object: User_Online_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_User_OrdersArgs = {
  objects: Array<User_Orders_Insert_Input>;
  on_conflict?: InputMaybe<User_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Orders_OneArgs = {
  object: User_Orders_Insert_Input;
  on_conflict?: InputMaybe<User_Orders_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RelationshipsArgs = {
  objects: Array<User_Relationships_Insert_Input>;
  on_conflict?: InputMaybe<User_Relationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Relationships_OneArgs = {
  object: User_Relationships_Insert_Input;
  on_conflict?: InputMaybe<User_Relationships_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_RolesArgs = {
  objects: Array<User_Roles_Insert_Input>;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Roles_OneArgs = {
  object: User_Roles_Insert_Input;
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_TypingArgs = {
  objects: Array<User_Typing_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_User_Typing_OneArgs = {
  object: User_Typing_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MessagesArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>;
  _set?: InputMaybe<Messages_Set_Input>;
  where: Messages_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_By_PkArgs = {
  _inc?: InputMaybe<Messages_Inc_Input>;
  _set?: InputMaybe<Messages_Set_Input>;
  pk_columns: Messages_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Messages_ManyArgs = {
  updates: Array<Messages_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_OrdersArgs = {
  _append?: InputMaybe<Orders_Append_Input>;
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  _inc?: InputMaybe<Orders_Inc_Input>;
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  where: Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_By_PkArgs = {
  _append?: InputMaybe<Orders_Append_Input>;
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  _inc?: InputMaybe<Orders_Inc_Input>;
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  _set?: InputMaybe<Orders_Set_Input>;
  pk_columns: Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ManyArgs = {
  updates: Array<Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_ProductsArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  where: Orders_Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_By_PkArgs = {
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  _set?: InputMaybe<Orders_Products_Set_Input>;
  pk_columns: Orders_Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Orders_Products_ManyArgs = {
  updates: Array<Orders_Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ProductsArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  where: Products_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Products_By_PkArgs = {
  _inc?: InputMaybe<Products_Inc_Input>;
  _set?: InputMaybe<Products_Set_Input>;
  pk_columns: Products_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Products_ManyArgs = {
  updates: Array<Products_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _inc?: InputMaybe<Roles_Inc_Input>;
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _inc?: InputMaybe<Roles_Inc_Input>;
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_ManyArgs = {
  updates: Array<Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_OnlineArgs = {
  _inc?: InputMaybe<User_Online_Inc_Input>;
  _set?: InputMaybe<User_Online_Set_Input>;
  where: User_Online_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Online_ManyArgs = {
  updates: Array<User_Online_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_OrdersArgs = {
  _inc?: InputMaybe<User_Orders_Inc_Input>;
  _set?: InputMaybe<User_Orders_Set_Input>;
  where: User_Orders_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Orders_By_PkArgs = {
  _inc?: InputMaybe<User_Orders_Inc_Input>;
  _set?: InputMaybe<User_Orders_Set_Input>;
  pk_columns: User_Orders_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Orders_ManyArgs = {
  updates: Array<User_Orders_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RelationshipsArgs = {
  _inc?: InputMaybe<User_Relationships_Inc_Input>;
  _set?: InputMaybe<User_Relationships_Set_Input>;
  where: User_Relationships_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Relationships_By_PkArgs = {
  _inc?: InputMaybe<User_Relationships_Inc_Input>;
  _set?: InputMaybe<User_Relationships_Set_Input>;
  pk_columns: User_Relationships_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Relationships_ManyArgs = {
  updates: Array<User_Relationships_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_RolesArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  where: User_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_By_PkArgs = {
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  _set?: InputMaybe<User_Roles_Set_Input>;
  pk_columns: User_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Roles_ManyArgs = {
  updates: Array<User_Roles_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_TypingArgs = {
  _inc?: InputMaybe<User_Typing_Inc_Input>;
  _set?: InputMaybe<User_Typing_Set_Input>;
  where: User_Typing_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Typing_ManyArgs = {
  updates: Array<User_Typing_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "orders" */
export type Orders = {
  __typename?: 'orders';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An array relationship */
  orders_products: Array<Orders_Products>;
  /** An aggregate relationship */
  orders_products_aggregate: Orders_Products_Aggregate;
  products: Scalars['jsonb']['output'];
  status: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_orders: Array<User_Orders>;
  /** An aggregate relationship */
  user_orders_aggregate: User_Orders_Aggregate;
};


/** columns and relationships of "orders" */
export type OrdersOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersProductsArgs = {
  path?: InputMaybe<Scalars['String']['input']>;
};


/** columns and relationships of "orders" */
export type OrdersUser_OrdersArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


/** columns and relationships of "orders" */
export type OrdersUser_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};

/** aggregated selection of "orders" */
export type Orders_Aggregate = {
  __typename?: 'orders_aggregate';
  aggregate?: Maybe<Orders_Aggregate_Fields>;
  nodes: Array<Orders>;
};

/** aggregate fields of "orders" */
export type Orders_Aggregate_Fields = {
  __typename?: 'orders_aggregate_fields';
  avg?: Maybe<Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Max_Fields>;
  min?: Maybe<Orders_Min_Fields>;
  stddev?: Maybe<Orders_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Sum_Fields>;
  var_pop?: Maybe<Orders_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Var_Samp_Fields>;
  variance?: Maybe<Orders_Variance_Fields>;
};


/** aggregate fields of "orders" */
export type Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Orders_Append_Input = {
  products?: InputMaybe<Scalars['jsonb']['input']>;
};

/** aggregate avg on columns */
export type Orders_Avg_Fields = {
  __typename?: 'orders_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "orders". All fields are combined with a logical 'AND'. */
export type Orders_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Bool_Exp>>;
  _not?: InputMaybe<Orders_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  orders_products?: InputMaybe<Orders_Products_Bool_Exp>;
  orders_products_aggregate?: InputMaybe<Orders_Products_Aggregate_Bool_Exp>;
  products?: InputMaybe<Jsonb_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_orders?: InputMaybe<User_Orders_Bool_Exp>;
  user_orders_aggregate?: InputMaybe<User_Orders_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "orders" */
export enum Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  OrdersPkey = 'orders_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Orders_Delete_At_Path_Input = {
  products?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Orders_Delete_Elem_Input = {
  products?: InputMaybe<Scalars['Int']['input']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Orders_Delete_Key_Input = {
  products?: InputMaybe<Scalars['String']['input']>;
};

/** input type for incrementing numeric columns in table "orders" */
export type Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders" */
export type Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  orders_products?: InputMaybe<Orders_Products_Arr_Rel_Insert_Input>;
  products?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_orders?: InputMaybe<User_Orders_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Orders_Max_Fields = {
  __typename?: 'orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Orders_Min_Fields = {
  __typename?: 'orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "orders" */
export type Orders_Mutation_Response = {
  __typename?: 'orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders>;
};

/** input type for inserting object relation for remote table "orders" */
export type Orders_Obj_Rel_Insert_Input = {
  data: Orders_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_On_Conflict>;
};

/** on_conflict condition type for table "orders" */
export type Orders_On_Conflict = {
  constraint: Orders_Constraint;
  update_columns?: Array<Orders_Update_Column>;
  where?: InputMaybe<Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "orders". */
export type Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  orders_products_aggregate?: InputMaybe<Orders_Products_Aggregate_Order_By>;
  products?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_orders_aggregate?: InputMaybe<User_Orders_Aggregate_Order_By>;
};

/** primary key columns input for table: orders */
export type Orders_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Orders_Prepend_Input = {
  products?: InputMaybe<Scalars['jsonb']['input']>;
};

/** columns and relationships of "orders_products" */
export type Orders_Products = {
  __typename?: 'orders_products';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['Int']['output'];
  /** An object relationship */
  product: Products;
  product_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
};

/** aggregated selection of "orders_products" */
export type Orders_Products_Aggregate = {
  __typename?: 'orders_products_aggregate';
  aggregate?: Maybe<Orders_Products_Aggregate_Fields>;
  nodes: Array<Orders_Products>;
};

export type Orders_Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Orders_Products_Aggregate_Bool_Exp_Count>;
};

export type Orders_Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Orders_Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_Fields = {
  __typename?: 'orders_products_aggregate_fields';
  avg?: Maybe<Orders_Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Orders_Products_Max_Fields>;
  min?: Maybe<Orders_Products_Min_Fields>;
  stddev?: Maybe<Orders_Products_Stddev_Fields>;
  stddev_pop?: Maybe<Orders_Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Orders_Products_Stddev_Samp_Fields>;
  sum?: Maybe<Orders_Products_Sum_Fields>;
  var_pop?: Maybe<Orders_Products_Var_Pop_Fields>;
  var_samp?: Maybe<Orders_Products_Var_Samp_Fields>;
  variance?: Maybe<Orders_Products_Variance_Fields>;
};


/** aggregate fields of "orders_products" */
export type Orders_Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Orders_Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "orders_products" */
export type Orders_Products_Aggregate_Order_By = {
  avg?: InputMaybe<Orders_Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Orders_Products_Max_Order_By>;
  min?: InputMaybe<Orders_Products_Min_Order_By>;
  stddev?: InputMaybe<Orders_Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Orders_Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Orders_Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Orders_Products_Sum_Order_By>;
  var_pop?: InputMaybe<Orders_Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Orders_Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Orders_Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "orders_products" */
export type Orders_Products_Arr_Rel_Insert_Input = {
  data: Array<Orders_Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Orders_Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Orders_Products_Avg_Fields = {
  __typename?: 'orders_products_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "orders_products" */
export type Orders_Products_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "orders_products". All fields are combined with a logical 'AND'. */
export type Orders_Products_Bool_Exp = {
  _and?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  _not?: InputMaybe<Orders_Products_Bool_Exp>;
  _or?: InputMaybe<Array<Orders_Products_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  product?: InputMaybe<Products_Bool_Exp>;
  product_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "orders_products" */
export enum Orders_Products_Constraint {
  /** unique or primary key constraint on columns "product_id", "id", "order_id" */
  OrdersProductsPkey = 'orders_products_pkey'
}

/** input type for incrementing numeric columns in table "orders_products" */
export type Orders_Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "orders_products" */
export type Orders_Products_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  product?: InputMaybe<Products_Obj_Rel_Insert_Input>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Orders_Products_Max_Fields = {
  __typename?: 'orders_products_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by max() on columns of table "orders_products" */
export type Orders_Products_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Orders_Products_Min_Fields = {
  __typename?: 'orders_products_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** order by min() on columns of table "orders_products" */
export type Orders_Products_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "orders_products" */
export type Orders_Products_Mutation_Response = {
  __typename?: 'orders_products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Orders_Products>;
};

/** on_conflict condition type for table "orders_products" */
export type Orders_Products_On_Conflict = {
  constraint: Orders_Products_Constraint;
  update_columns?: Array<Orders_Products_Update_Column>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** Ordering options when selecting data from "orders_products". */
export type Orders_Products_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  product?: InputMaybe<Products_Order_By>;
  product_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: orders_products */
export type Orders_Products_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
  order_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};

/** select columns of table "orders_products" */
export enum Orders_Products_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders_products" */
export type Orders_Products_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Products_Stddev_Fields = {
  __typename?: 'orders_products_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "orders_products" */
export type Orders_Products_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Orders_Products_Stddev_Pop_Fields = {
  __typename?: 'orders_products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "orders_products" */
export type Orders_Products_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Orders_Products_Stddev_Samp_Fields = {
  __typename?: 'orders_products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "orders_products" */
export type Orders_Products_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "orders_products" */
export type Orders_Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Products_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Orders_Products_Sum_Fields = {
  __typename?: 'orders_products_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  product_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "orders_products" */
export type Orders_Products_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** update columns of table "orders_products" */
export enum Orders_Products_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  ProductId = 'product_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Orders_Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Products_Var_Pop_Fields = {
  __typename?: 'orders_products_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "orders_products" */
export type Orders_Products_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Orders_Products_Var_Samp_Fields = {
  __typename?: 'orders_products_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "orders_products" */
export type Orders_Products_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Orders_Products_Variance_Fields = {
  __typename?: 'orders_products_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  product_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "orders_products" */
export type Orders_Products_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  product_id?: InputMaybe<Order_By>;
};

/** select columns of table "orders" */
export enum Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Products = 'products',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "orders" */
export type Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Orders_Stddev_Fields = {
  __typename?: 'orders_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Orders_Stddev_Pop_Fields = {
  __typename?: 'orders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Orders_Stddev_Samp_Fields = {
  __typename?: 'orders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "orders" */
export type Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  products?: InputMaybe<Scalars['jsonb']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Orders_Sum_Fields = {
  __typename?: 'orders_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "orders" */
export enum Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Products = 'products',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Orders_Updates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<Orders_Append_Input>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<Orders_Delete_At_Path_Input>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<Orders_Delete_Elem_Input>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<Orders_Delete_Key_Input>;
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Orders_Inc_Input>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<Orders_Prepend_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Orders_Var_Pop_Fields = {
  __typename?: 'orders_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Orders_Var_Samp_Fields = {
  __typename?: 'orders_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Orders_Variance_Fields = {
  __typename?: 'orders_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "products" */
export type Products = {
  __typename?: 'products';
  category: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** An array relationship */
  orders_products: Array<Orders_Products>;
  /** An aggregate relationship */
  orders_products_aggregate: Orders_Products_Aggregate;
  supplier_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
};


/** columns and relationships of "products" */
export type ProductsOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


/** columns and relationships of "products" */
export type ProductsOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};

/** aggregated selection of "products" */
export type Products_Aggregate = {
  __typename?: 'products_aggregate';
  aggregate?: Maybe<Products_Aggregate_Fields>;
  nodes: Array<Products>;
};

export type Products_Aggregate_Bool_Exp = {
  count?: InputMaybe<Products_Aggregate_Bool_Exp_Count>;
};

export type Products_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Products_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "products" */
export type Products_Aggregate_Fields = {
  __typename?: 'products_aggregate_fields';
  avg?: Maybe<Products_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Products_Max_Fields>;
  min?: Maybe<Products_Min_Fields>;
  stddev?: Maybe<Products_Stddev_Fields>;
  stddev_pop?: Maybe<Products_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Products_Stddev_Samp_Fields>;
  sum?: Maybe<Products_Sum_Fields>;
  var_pop?: Maybe<Products_Var_Pop_Fields>;
  var_samp?: Maybe<Products_Var_Samp_Fields>;
  variance?: Maybe<Products_Variance_Fields>;
};


/** aggregate fields of "products" */
export type Products_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Products_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "products" */
export type Products_Aggregate_Order_By = {
  avg?: InputMaybe<Products_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Products_Max_Order_By>;
  min?: InputMaybe<Products_Min_Order_By>;
  stddev?: InputMaybe<Products_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Products_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Products_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Products_Sum_Order_By>;
  var_pop?: InputMaybe<Products_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Products_Var_Samp_Order_By>;
  variance?: InputMaybe<Products_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "products" */
export type Products_Arr_Rel_Insert_Input = {
  data: Array<Products_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** aggregate avg on columns */
export type Products_Avg_Fields = {
  __typename?: 'products_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "products" */
export type Products_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type Products_Bool_Exp = {
  _and?: InputMaybe<Array<Products_Bool_Exp>>;
  _not?: InputMaybe<Products_Bool_Exp>;
  _or?: InputMaybe<Array<Products_Bool_Exp>>;
  category?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  orders_products?: InputMaybe<Orders_Products_Bool_Exp>;
  orders_products_aggregate?: InputMaybe<Orders_Products_Aggregate_Bool_Exp>;
  supplier_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "products" */
export enum Products_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProductsPkey = 'products_pkey'
}

/** input type for incrementing numeric columns in table "products" */
export type Products_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "products" */
export type Products_Insert_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orders_products?: InputMaybe<Orders_Products_Arr_Rel_Insert_Input>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Products_Max_Fields = {
  __typename?: 'products_max_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "products" */
export type Products_Max_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Products_Min_Fields = {
  __typename?: 'products_min_fields';
  category?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "products" */
export type Products_Min_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "products" */
export type Products_Mutation_Response = {
  __typename?: 'products_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Products>;
};

/** input type for inserting object relation for remote table "products" */
export type Products_Obj_Rel_Insert_Input = {
  data: Products_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Products_On_Conflict>;
};

/** on_conflict condition type for table "products" */
export type Products_On_Conflict = {
  constraint: Products_Constraint;
  update_columns?: Array<Products_Update_Column>;
  where?: InputMaybe<Products_Bool_Exp>;
};

/** Ordering options when selecting data from "products". */
export type Products_Order_By = {
  category?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  orders_products_aggregate?: InputMaybe<Orders_Products_Aggregate_Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: products */
export type Products_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "products" */
export enum Products_Select_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SupplierId = 'supplier_id'
}

/** input type for updating data in table "products" */
export type Products_Set_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type Products_Stddev_Fields = {
  __typename?: 'products_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "products" */
export type Products_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Products_Stddev_Pop_Fields = {
  __typename?: 'products_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "products" */
export type Products_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Products_Stddev_Samp_Fields = {
  __typename?: 'products_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "products" */
export type Products_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "products" */
export type Products_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Products_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Products_Stream_Cursor_Value_Input = {
  category?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type Products_Sum_Fields = {
  __typename?: 'products_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "products" */
export type Products_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** update columns of table "products" */
export enum Products_Update_Column {
  /** column name */
  Category = 'category',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  SupplierId = 'supplier_id'
}

export type Products_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Products_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Products_Set_Input>;
  /** filter the rows which have to be updated */
  where: Products_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Products_Var_Pop_Fields = {
  __typename?: 'products_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "products" */
export type Products_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Products_Var_Samp_Fields = {
  __typename?: 'products_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "products" */
export type Products_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Products_Variance_Fields = {
  __typename?: 'products_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "products" */
export type Products_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  orders_products: Array<Orders_Products>;
  /** An aggregate relationship */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** An array relationship */
  user_orders: Array<User_Orders>;
  /** An aggregate relationship */
  user_orders_aggregate: User_Orders_Aggregate;
  /** fetch data from the table: "user_orders" using primary key columns */
  user_orders_by_pk?: Maybe<User_Orders>;
  /** An array relationship */
  user_relationships: Array<User_Relationships>;
  /** An aggregate relationship */
  user_relationships_aggregate: User_Relationships_Aggregate;
  /** fetch data from the table: "user_relationships" using primary key columns */
  user_relationships_by_pk?: Maybe<User_Relationships>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Query_RootMessages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Query_RootOrders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Query_RootOrders_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
  order_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};


export type Query_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Query_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Query_RootUser_OrdersArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


export type Query_RootUser_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


export type Query_RootUser_Orders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Query_RootUser_RelationshipsArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


export type Query_RootUser_Relationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


export type Query_RootUser_Relationships_By_PkArgs = {
  id: Scalars['Int']['input'];
  owner_id: Scalars['Int']['input'];
  supplier_id: Scalars['Int']['input'];
};


export type Query_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Query_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Query_RootUser_TypingArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Query_RootUser_Typing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  created_at: Scalars['timestamptz']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  key: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "roles" */
export type RolesUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  avg?: Maybe<Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
  stddev?: Maybe<Roles_Stddev_Fields>;
  stddev_pop?: Maybe<Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Roles_Stddev_Samp_Fields>;
  sum?: Maybe<Roles_Sum_Fields>;
  var_pop?: Maybe<Roles_Var_Pop_Fields>;
  var_samp?: Maybe<Roles_Var_Samp_Fields>;
  variance?: Maybe<Roles_Variance_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Roles_Avg_Fields = {
  __typename?: 'roles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  key?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  RolesPkey = 'roles_pkey'
}

/** input type for incrementing numeric columns in table "roles" */
export type Roles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  key?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Roles_Stddev_Fields = {
  __typename?: 'roles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Roles_Stddev_Pop_Fields = {
  __typename?: 'roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Roles_Stddev_Samp_Fields = {
  __typename?: 'roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "roles" */
export type Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Roles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Roles_Sum_Fields = {
  __typename?: 'roles_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Key = 'key',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Roles_Var_Pop_Fields = {
  __typename?: 'roles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Roles_Var_Samp_Fields = {
  __typename?: 'roles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Roles_Variance_Fields = {
  __typename?: 'roles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  /** fetch data from the table: "messages" using primary key columns */
  messages_by_pk?: Maybe<Messages>;
  /** fetch data from the table in a streaming manner: "messages" */
  messages_stream: Array<Messages>;
  /** fetch data from the table: "orders" */
  orders: Array<Orders>;
  /** fetch aggregated fields from the table: "orders" */
  orders_aggregate: Orders_Aggregate;
  /** fetch data from the table: "orders" using primary key columns */
  orders_by_pk?: Maybe<Orders>;
  /** An array relationship */
  orders_products: Array<Orders_Products>;
  /** An aggregate relationship */
  orders_products_aggregate: Orders_Products_Aggregate;
  /** fetch data from the table: "orders_products" using primary key columns */
  orders_products_by_pk?: Maybe<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders_products" */
  orders_products_stream: Array<Orders_Products>;
  /** fetch data from the table in a streaming manner: "orders" */
  orders_stream: Array<Orders>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  /** fetch data from the table: "products" using primary key columns */
  products_by_pk?: Maybe<Products>;
  /** fetch data from the table in a streaming manner: "products" */
  products_stream: Array<Products>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table in a streaming manner: "roles" */
  roles_stream: Array<Roles>;
  /** fetch data from the table: "user_online" */
  user_online: Array<User_Online>;
  /** fetch aggregated fields from the table: "user_online" */
  user_online_aggregate: User_Online_Aggregate;
  /** fetch data from the table in a streaming manner: "user_online" */
  user_online_stream: Array<User_Online>;
  /** An array relationship */
  user_orders: Array<User_Orders>;
  /** An aggregate relationship */
  user_orders_aggregate: User_Orders_Aggregate;
  /** fetch data from the table: "user_orders" using primary key columns */
  user_orders_by_pk?: Maybe<User_Orders>;
  /** fetch data from the table in a streaming manner: "user_orders" */
  user_orders_stream: Array<User_Orders>;
  /** An array relationship */
  user_relationships: Array<User_Relationships>;
  /** An aggregate relationship */
  user_relationships_aggregate: User_Relationships_Aggregate;
  /** fetch data from the table: "user_relationships" using primary key columns */
  user_relationships_by_pk?: Maybe<User_Relationships>;
  /** fetch data from the table in a streaming manner: "user_relationships" */
  user_relationships_stream: Array<User_Relationships>;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
  /** fetch data from the table: "user_roles" using primary key columns */
  user_roles_by_pk?: Maybe<User_Roles>;
  /** fetch data from the table in a streaming manner: "user_roles" */
  user_roles_stream: Array<User_Roles>;
  /** fetch data from the table: "user_typing" */
  user_typing: Array<User_Typing>;
  /** fetch aggregated fields from the table: "user_typing" */
  user_typing_aggregate: User_Typing_Aggregate;
  /** fetch data from the table in a streaming manner: "user_typing" */
  user_typing_stream: Array<User_Typing>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table in a streaming manner: "users" */
  users_stream: Array<Users>;
};


export type Subscription_RootMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootMessages_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMessages_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Messages_Stream_Cursor_Input>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


export type Subscription_RootOrdersArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Order_By>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootOrders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootOrders_ProductsArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Orders_Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Orders_Products_Order_By>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_Products_By_PkArgs = {
  id: Scalars['Int']['input'];
  order_id: Scalars['Int']['input'];
  product_id: Scalars['Int']['input'];
};


export type Subscription_RootOrders_Products_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Products_Bool_Exp>;
};


export type Subscription_RootOrders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<Orders_Bool_Exp>;
};


export type Subscription_RootProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootProducts_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootProducts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Products_Stream_Cursor_Input>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootRoles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootUser_OnlineArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Online_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Online_Order_By>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_Online_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Online_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Online_Bool_Exp>;
};


export type Subscription_RootUser_OrdersArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


export type Subscription_RootUser_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


export type Subscription_RootUser_Orders_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Orders_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Orders_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


export type Subscription_RootUser_RelationshipsArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


export type Subscription_RootUser_Relationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


export type Subscription_RootUser_Relationships_By_PkArgs = {
  id: Scalars['Int']['input'];
  owner_id: Scalars['Int']['input'];
  supplier_id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Relationships_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Relationships_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


export type Subscription_RootUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_Roles_By_PkArgs = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};


export type Subscription_RootUser_Roles_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Roles_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


export type Subscription_RootUser_TypingArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Subscription_RootUser_Typing_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Typing_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Typing_Order_By>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Subscription_RootUser_Typing_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<User_Typing_Stream_Cursor_Input>>;
  where?: InputMaybe<User_Typing_Bool_Exp>;
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootUsers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Users_Stream_Cursor_Input>>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** columns and relationships of "user_online" */
export type User_Online = {
  __typename?: 'user_online';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "user_online" */
export type User_Online_Aggregate = {
  __typename?: 'user_online_aggregate';
  aggregate?: Maybe<User_Online_Aggregate_Fields>;
  nodes: Array<User_Online>;
};

/** aggregate fields of "user_online" */
export type User_Online_Aggregate_Fields = {
  __typename?: 'user_online_aggregate_fields';
  avg?: Maybe<User_Online_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Online_Max_Fields>;
  min?: Maybe<User_Online_Min_Fields>;
  stddev?: Maybe<User_Online_Stddev_Fields>;
  stddev_pop?: Maybe<User_Online_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Online_Stddev_Samp_Fields>;
  sum?: Maybe<User_Online_Sum_Fields>;
  var_pop?: Maybe<User_Online_Var_Pop_Fields>;
  var_samp?: Maybe<User_Online_Var_Samp_Fields>;
  variance?: Maybe<User_Online_Variance_Fields>;
};


/** aggregate fields of "user_online" */
export type User_Online_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Online_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Online_Avg_Fields = {
  __typename?: 'user_online_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_online". All fields are combined with a logical 'AND'. */
export type User_Online_Bool_Exp = {
  _and?: InputMaybe<Array<User_Online_Bool_Exp>>;
  _not?: InputMaybe<User_Online_Bool_Exp>;
  _or?: InputMaybe<Array<User_Online_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_online" */
export type User_Online_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_online" */
export type User_Online_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Online_Max_Fields = {
  __typename?: 'user_online_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Online_Min_Fields = {
  __typename?: 'user_online_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_online" */
export type User_Online_Mutation_Response = {
  __typename?: 'user_online_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Online>;
};

/** Ordering options when selecting data from "user_online". */
export type User_Online_Order_By = {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "user_online" */
export enum User_Online_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_online" */
export type User_Online_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Online_Stddev_Fields = {
  __typename?: 'user_online_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Online_Stddev_Pop_Fields = {
  __typename?: 'user_online_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Online_Stddev_Samp_Fields = {
  __typename?: 'user_online_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_online" */
export type User_Online_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Online_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Online_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Online_Sum_Fields = {
  __typename?: 'user_online_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type User_Online_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Online_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Online_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Online_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Online_Var_Pop_Fields = {
  __typename?: 'user_online_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Online_Var_Samp_Fields = {
  __typename?: 'user_online_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Online_Variance_Fields = {
  __typename?: 'user_online_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "user_orders" */
export type User_Orders = {
  __typename?: 'user_orders';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  order: Orders;
  order_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userByUserId2: Users;
  user_id_1: Scalars['Int']['output'];
  user_id_2: Scalars['Int']['output'];
};

/** aggregated selection of "user_orders" */
export type User_Orders_Aggregate = {
  __typename?: 'user_orders_aggregate';
  aggregate?: Maybe<User_Orders_Aggregate_Fields>;
  nodes: Array<User_Orders>;
};

export type User_Orders_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Orders_Aggregate_Bool_Exp_Count>;
};

export type User_Orders_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Orders_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_orders" */
export type User_Orders_Aggregate_Fields = {
  __typename?: 'user_orders_aggregate_fields';
  avg?: Maybe<User_Orders_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Orders_Max_Fields>;
  min?: Maybe<User_Orders_Min_Fields>;
  stddev?: Maybe<User_Orders_Stddev_Fields>;
  stddev_pop?: Maybe<User_Orders_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Orders_Stddev_Samp_Fields>;
  sum?: Maybe<User_Orders_Sum_Fields>;
  var_pop?: Maybe<User_Orders_Var_Pop_Fields>;
  var_samp?: Maybe<User_Orders_Var_Samp_Fields>;
  variance?: Maybe<User_Orders_Variance_Fields>;
};


/** aggregate fields of "user_orders" */
export type User_Orders_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Orders_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_orders" */
export type User_Orders_Aggregate_Order_By = {
  avg?: InputMaybe<User_Orders_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Orders_Max_Order_By>;
  min?: InputMaybe<User_Orders_Min_Order_By>;
  stddev?: InputMaybe<User_Orders_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Orders_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Orders_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Orders_Sum_Order_By>;
  var_pop?: InputMaybe<User_Orders_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Orders_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Orders_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_orders" */
export type User_Orders_Arr_Rel_Insert_Input = {
  data: Array<User_Orders_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Orders_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Orders_Avg_Fields = {
  __typename?: 'user_orders_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_orders" */
export type User_Orders_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_orders". All fields are combined with a logical 'AND'. */
export type User_Orders_Bool_Exp = {
  _and?: InputMaybe<Array<User_Orders_Bool_Exp>>;
  _not?: InputMaybe<User_Orders_Bool_Exp>;
  _or?: InputMaybe<Array<User_Orders_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  order?: InputMaybe<Orders_Bool_Exp>;
  order_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userByUserId2?: InputMaybe<Users_Bool_Exp>;
  user_id_1?: InputMaybe<Int_Comparison_Exp>;
  user_id_2?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_orders" */
export enum User_Orders_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserOrdersPkey = 'user_orders_pkey'
}

/** input type for incrementing numeric columns in table "user_orders" */
export type User_Orders_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_orders" */
export type User_Orders_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Orders_Obj_Rel_Insert_Input>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userByUserId2?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Orders_Max_Fields = {
  __typename?: 'user_orders_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_orders" */
export type User_Orders_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Orders_Min_Fields = {
  __typename?: 'user_orders_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_orders" */
export type User_Orders_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_orders" */
export type User_Orders_Mutation_Response = {
  __typename?: 'user_orders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Orders>;
};

/** on_conflict condition type for table "user_orders" */
export type User_Orders_On_Conflict = {
  constraint: User_Orders_Constraint;
  update_columns?: Array<User_Orders_Update_Column>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};

/** Ordering options when selecting data from "user_orders". */
export type User_Orders_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Orders_Order_By>;
  order_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userByUserId2?: InputMaybe<Users_Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_orders */
export type User_Orders_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "user_orders" */
export enum User_Orders_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId_1 = 'user_id_1',
  /** column name */
  UserId_2 = 'user_id_2'
}

/** input type for updating data in table "user_orders" */
export type User_Orders_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Orders_Stddev_Fields = {
  __typename?: 'user_orders_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_orders" */
export type User_Orders_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Orders_Stddev_Pop_Fields = {
  __typename?: 'user_orders_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_orders" */
export type User_Orders_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Orders_Stddev_Samp_Fields = {
  __typename?: 'user_orders_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_orders" */
export type User_Orders_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_orders" */
export type User_Orders_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Orders_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Orders_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  order_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id_1?: InputMaybe<Scalars['Int']['input']>;
  user_id_2?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Orders_Sum_Fields = {
  __typename?: 'user_orders_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  order_id?: Maybe<Scalars['Int']['output']>;
  user_id_1?: Maybe<Scalars['Int']['output']>;
  user_id_2?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_orders" */
export type User_Orders_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** update columns of table "user_orders" */
export enum User_Orders_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  OrderId = 'order_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId_1 = 'user_id_1',
  /** column name */
  UserId_2 = 'user_id_2'
}

export type User_Orders_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Orders_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Orders_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Orders_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Orders_Var_Pop_Fields = {
  __typename?: 'user_orders_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_orders" */
export type User_Orders_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Orders_Var_Samp_Fields = {
  __typename?: 'user_orders_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_orders" */
export type User_Orders_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Orders_Variance_Fields = {
  __typename?: 'user_orders_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  order_id?: Maybe<Scalars['Float']['output']>;
  user_id_1?: Maybe<Scalars['Float']['output']>;
  user_id_2?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_orders" */
export type User_Orders_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  order_id?: InputMaybe<Order_By>;
  user_id_1?: InputMaybe<Order_By>;
  user_id_2?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_relationships" */
export type User_Relationships = {
  __typename?: 'user_relationships';
  id: Scalars['Int']['output'];
  owner_id: Scalars['Int']['output'];
  supplier_id: Scalars['Int']['output'];
  /** An object relationship */
  user: Users;
  /** An object relationship */
  userBySupplierId: Users;
};

/** aggregated selection of "user_relationships" */
export type User_Relationships_Aggregate = {
  __typename?: 'user_relationships_aggregate';
  aggregate?: Maybe<User_Relationships_Aggregate_Fields>;
  nodes: Array<User_Relationships>;
};

export type User_Relationships_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Relationships_Aggregate_Bool_Exp_Count>;
};

export type User_Relationships_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Relationships_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Relationships_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_relationships" */
export type User_Relationships_Aggregate_Fields = {
  __typename?: 'user_relationships_aggregate_fields';
  avg?: Maybe<User_Relationships_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Relationships_Max_Fields>;
  min?: Maybe<User_Relationships_Min_Fields>;
  stddev?: Maybe<User_Relationships_Stddev_Fields>;
  stddev_pop?: Maybe<User_Relationships_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Relationships_Stddev_Samp_Fields>;
  sum?: Maybe<User_Relationships_Sum_Fields>;
  var_pop?: Maybe<User_Relationships_Var_Pop_Fields>;
  var_samp?: Maybe<User_Relationships_Var_Samp_Fields>;
  variance?: Maybe<User_Relationships_Variance_Fields>;
};


/** aggregate fields of "user_relationships" */
export type User_Relationships_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Relationships_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_relationships" */
export type User_Relationships_Aggregate_Order_By = {
  avg?: InputMaybe<User_Relationships_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Relationships_Max_Order_By>;
  min?: InputMaybe<User_Relationships_Min_Order_By>;
  stddev?: InputMaybe<User_Relationships_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Relationships_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Relationships_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Relationships_Sum_Order_By>;
  var_pop?: InputMaybe<User_Relationships_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Relationships_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Relationships_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_relationships" */
export type User_Relationships_Arr_Rel_Insert_Input = {
  data: Array<User_Relationships_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Relationships_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Relationships_Avg_Fields = {
  __typename?: 'user_relationships_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_relationships" */
export type User_Relationships_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_relationships". All fields are combined with a logical 'AND'. */
export type User_Relationships_Bool_Exp = {
  _and?: InputMaybe<Array<User_Relationships_Bool_Exp>>;
  _not?: InputMaybe<User_Relationships_Bool_Exp>;
  _or?: InputMaybe<Array<User_Relationships_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  owner_id?: InputMaybe<Int_Comparison_Exp>;
  supplier_id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  userBySupplierId?: InputMaybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "user_relationships" */
export enum User_Relationships_Constraint {
  /** unique or primary key constraint on columns "id", "supplier_id", "owner_id" */
  UserRelationshipsPkey = 'user_relationships_pkey'
}

/** input type for incrementing numeric columns in table "user_relationships" */
export type User_Relationships_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_relationships" */
export type User_Relationships_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  userBySupplierId?: InputMaybe<Users_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Relationships_Max_Fields = {
  __typename?: 'user_relationships_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_relationships" */
export type User_Relationships_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Relationships_Min_Fields = {
  __typename?: 'user_relationships_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_relationships" */
export type User_Relationships_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_relationships" */
export type User_Relationships_Mutation_Response = {
  __typename?: 'user_relationships_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Relationships>;
};

/** on_conflict condition type for table "user_relationships" */
export type User_Relationships_On_Conflict = {
  constraint: User_Relationships_Constraint;
  update_columns?: Array<User_Relationships_Update_Column>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};

/** Ordering options when selecting data from "user_relationships". */
export type User_Relationships_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  userBySupplierId?: InputMaybe<Users_Order_By>;
};

/** primary key columns input for table: user_relationships */
export type User_Relationships_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
  owner_id: Scalars['Int']['input'];
  supplier_id: Scalars['Int']['input'];
};

/** select columns of table "user_relationships" */
export enum User_Relationships_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  SupplierId = 'supplier_id'
}

/** input type for updating data in table "user_relationships" */
export type User_Relationships_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Relationships_Stddev_Fields = {
  __typename?: 'user_relationships_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_relationships" */
export type User_Relationships_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Relationships_Stddev_Pop_Fields = {
  __typename?: 'user_relationships_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_relationships" */
export type User_Relationships_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Relationships_Stddev_Samp_Fields = {
  __typename?: 'user_relationships_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_relationships" */
export type User_Relationships_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_relationships" */
export type User_Relationships_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Relationships_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Relationships_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  owner_id?: InputMaybe<Scalars['Int']['input']>;
  supplier_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Relationships_Sum_Fields = {
  __typename?: 'user_relationships_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  owner_id?: Maybe<Scalars['Int']['output']>;
  supplier_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_relationships" */
export type User_Relationships_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_relationships" */
export enum User_Relationships_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  OwnerId = 'owner_id',
  /** column name */
  SupplierId = 'supplier_id'
}

export type User_Relationships_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Relationships_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Relationships_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Relationships_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Relationships_Var_Pop_Fields = {
  __typename?: 'user_relationships_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_relationships" */
export type User_Relationships_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Relationships_Var_Samp_Fields = {
  __typename?: 'user_relationships_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_relationships" */
export type User_Relationships_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Relationships_Variance_Fields = {
  __typename?: 'user_relationships_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  owner_id?: Maybe<Scalars['Float']['output']>;
  supplier_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_relationships" */
export type User_Relationships_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  owner_id?: InputMaybe<Order_By>;
  supplier_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_roles" */
export type User_Roles = {
  __typename?: 'user_roles';
  created_at: Scalars['timestamptz']['output'];
  id: Scalars['Int']['output'];
  /** An object relationship */
  role: Roles;
  role_id: Scalars['Int']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['Int']['output'];
};

/** aggregated selection of "user_roles" */
export type User_Roles_Aggregate = {
  __typename?: 'user_roles_aggregate';
  aggregate?: Maybe<User_Roles_Aggregate_Fields>;
  nodes: Array<User_Roles>;
};

export type User_Roles_Aggregate_Bool_Exp = {
  count?: InputMaybe<User_Roles_Aggregate_Bool_Exp_Count>;
};

export type User_Roles_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<User_Roles_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_Fields = {
  __typename?: 'user_roles_aggregate_fields';
  avg?: Maybe<User_Roles_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Roles_Max_Fields>;
  min?: Maybe<User_Roles_Min_Fields>;
  stddev?: Maybe<User_Roles_Stddev_Fields>;
  stddev_pop?: Maybe<User_Roles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Roles_Stddev_Samp_Fields>;
  sum?: Maybe<User_Roles_Sum_Fields>;
  var_pop?: Maybe<User_Roles_Var_Pop_Fields>;
  var_samp?: Maybe<User_Roles_Var_Samp_Fields>;
  variance?: Maybe<User_Roles_Variance_Fields>;
};


/** aggregate fields of "user_roles" */
export type User_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "user_roles" */
export type User_Roles_Aggregate_Order_By = {
  avg?: InputMaybe<User_Roles_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Roles_Max_Order_By>;
  min?: InputMaybe<User_Roles_Min_Order_By>;
  stddev?: InputMaybe<User_Roles_Stddev_Order_By>;
  stddev_pop?: InputMaybe<User_Roles_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<User_Roles_Stddev_Samp_Order_By>;
  sum?: InputMaybe<User_Roles_Sum_Order_By>;
  var_pop?: InputMaybe<User_Roles_Var_Pop_Order_By>;
  var_samp?: InputMaybe<User_Roles_Var_Samp_Order_By>;
  variance?: InputMaybe<User_Roles_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_roles" */
export type User_Roles_Arr_Rel_Insert_Input = {
  data: Array<User_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Roles_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Roles_Avg_Fields = {
  __typename?: 'user_roles_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "user_roles" */
export type User_Roles_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_roles". All fields are combined with a logical 'AND'. */
export type User_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  _not?: InputMaybe<User_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<User_Roles_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<Roles_Bool_Exp>;
  role_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_roles" */
export enum User_Roles_Constraint {
  /** unique or primary key constraint on columns "role_id", "user_id", "id" */
  UserRolesPkey = 'user_roles_pkey'
}

/** input type for incrementing numeric columns in table "user_roles" */
export type User_Roles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_roles" */
export type User_Roles_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate max on columns */
export type User_Roles_Max_Fields = {
  __typename?: 'user_roles_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by max() on columns of table "user_roles" */
export type User_Roles_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Roles_Min_Fields = {
  __typename?: 'user_roles_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by min() on columns of table "user_roles" */
export type User_Roles_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_roles" */
export type User_Roles_Mutation_Response = {
  __typename?: 'user_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Roles>;
};

/** on_conflict condition type for table "user_roles" */
export type User_Roles_On_Conflict = {
  constraint: User_Roles_Constraint;
  update_columns?: Array<User_Roles_Update_Column>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "user_roles". */
export type User_Roles_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_roles */
export type User_Roles_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
  role_id: Scalars['Int']['input'];
  user_id: Scalars['Int']['input'];
};

/** select columns of table "user_roles" */
export enum User_Roles_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_roles" */
export type User_Roles_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate stddev on columns */
export type User_Roles_Stddev_Fields = {
  __typename?: 'user_roles_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "user_roles" */
export type User_Roles_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Roles_Stddev_Pop_Fields = {
  __typename?: 'user_roles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "user_roles" */
export type User_Roles_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Roles_Stddev_Samp_Fields = {
  __typename?: 'user_roles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "user_roles" */
export type User_Roles_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "user_roles" */
export type User_Roles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Roles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Roles_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  role_id?: InputMaybe<Scalars['Int']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  user_id?: InputMaybe<Scalars['Int']['input']>;
};

/** aggregate sum on columns */
export type User_Roles_Sum_Fields = {
  __typename?: 'user_roles_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
  role_id?: Maybe<Scalars['Int']['output']>;
  user_id?: Maybe<Scalars['Int']['output']>;
};

/** order by sum() on columns of table "user_roles" */
export type User_Roles_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "user_roles" */
export enum User_Roles_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type User_Roles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Roles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Roles_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Roles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Roles_Var_Pop_Fields = {
  __typename?: 'user_roles_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "user_roles" */
export type User_Roles_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Roles_Var_Samp_Fields = {
  __typename?: 'user_roles_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "user_roles" */
export type User_Roles_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Roles_Variance_Fields = {
  __typename?: 'user_roles_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
  role_id?: Maybe<Scalars['Float']['output']>;
  user_id?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "user_roles" */
export type User_Roles_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "user_typing" */
export type User_Typing = {
  __typename?: 'user_typing';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregated selection of "user_typing" */
export type User_Typing_Aggregate = {
  __typename?: 'user_typing_aggregate';
  aggregate?: Maybe<User_Typing_Aggregate_Fields>;
  nodes: Array<User_Typing>;
};

/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_Fields = {
  __typename?: 'user_typing_aggregate_fields';
  avg?: Maybe<User_Typing_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<User_Typing_Max_Fields>;
  min?: Maybe<User_Typing_Min_Fields>;
  stddev?: Maybe<User_Typing_Stddev_Fields>;
  stddev_pop?: Maybe<User_Typing_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Typing_Stddev_Samp_Fields>;
  sum?: Maybe<User_Typing_Sum_Fields>;
  var_pop?: Maybe<User_Typing_Var_Pop_Fields>;
  var_samp?: Maybe<User_Typing_Var_Samp_Fields>;
  variance?: Maybe<User_Typing_Variance_Fields>;
};


/** aggregate fields of "user_typing" */
export type User_Typing_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Typing_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type User_Typing_Avg_Fields = {
  __typename?: 'user_typing_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "user_typing". All fields are combined with a logical 'AND'. */
export type User_Typing_Bool_Exp = {
  _and?: InputMaybe<Array<User_Typing_Bool_Exp>>;
  _not?: InputMaybe<User_Typing_Bool_Exp>;
  _or?: InputMaybe<Array<User_Typing_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "user_typing" */
export type User_Typing_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "user_typing" */
export type User_Typing_Insert_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type User_Typing_Max_Fields = {
  __typename?: 'user_typing_max_fields';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type User_Typing_Min_Fields = {
  __typename?: 'user_typing_min_fields';
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "user_typing" */
export type User_Typing_Mutation_Response = {
  __typename?: 'user_typing_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Typing>;
};

/** Ordering options when selecting data from "user_typing". */
export type User_Typing_Order_By = {
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** select columns of table "user_typing" */
export enum User_Typing_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "user_typing" */
export type User_Typing_Set_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type User_Typing_Stddev_Fields = {
  __typename?: 'user_typing_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type User_Typing_Stddev_Pop_Fields = {
  __typename?: 'user_typing_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type User_Typing_Stddev_Samp_Fields = {
  __typename?: 'user_typing_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "user_typing" */
export type User_Typing_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: User_Typing_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type User_Typing_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type User_Typing_Sum_Fields = {
  __typename?: 'user_typing_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

export type User_Typing_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Typing_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Typing_Set_Input>;
  /** filter the rows which have to be updated */
  where: User_Typing_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Typing_Var_Pop_Fields = {
  __typename?: 'user_typing_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type User_Typing_Var_Samp_Fields = {
  __typename?: 'user_typing_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type User_Typing_Variance_Fields = {
  __typename?: 'user_typing_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  last_seen: Scalars['timestamptz']['output'];
  last_typed: Scalars['timestamptz']['output'];
  /** An array relationship */
  messages: Array<Messages>;
  /** An aggregate relationship */
  messages_aggregate: Messages_Aggregate;
  name?: Maybe<Scalars['String']['output']>;
  /** An array relationship */
  products: Array<Products>;
  /** An aggregate relationship */
  products_aggregate: Products_Aggregate;
  profile_image?: Maybe<Scalars['String']['output']>;
  uid: Scalars['String']['output'];
  updated_at: Scalars['timestamptz']['output'];
  /** An array relationship */
  userOrdersByUserId2: Array<User_Orders>;
  /** An aggregate relationship */
  userOrdersByUserId2_aggregate: User_Orders_Aggregate;
  /** An array relationship */
  userRelationshipsBySupplierId: Array<User_Relationships>;
  /** An aggregate relationship */
  userRelationshipsBySupplierId_aggregate: User_Relationships_Aggregate;
  /** An array relationship */
  user_orders: Array<User_Orders>;
  /** An aggregate relationship */
  user_orders_aggregate: User_Orders_Aggregate;
  /** An array relationship */
  user_relationships: Array<User_Relationships>;
  /** An aggregate relationship */
  user_relationships_aggregate: User_Relationships_Aggregate;
  /** An array relationship */
  user_roles: Array<User_Roles>;
  /** An aggregate relationship */
  user_roles_aggregate: User_Roles_Aggregate;
};


/** columns and relationships of "users" */
export type UsersMessagesArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersMessages_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Messages_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Messages_Order_By>>;
  where?: InputMaybe<Messages_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProductsArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersProducts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Products_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Products_Order_By>>;
  where?: InputMaybe<Products_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserOrdersByUserId2Args = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserOrdersByUserId2_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserRelationshipsBySupplierIdArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUserRelationshipsBySupplierId_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_OrdersArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Orders_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Orders_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Orders_Order_By>>;
  where?: InputMaybe<User_Orders_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_RelationshipsArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Relationships_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Relationships_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Relationships_Order_By>>;
  where?: InputMaybe<User_Relationships_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_RolesArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<User_Roles_Order_By>>;
  where?: InputMaybe<User_Roles_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_seen?: InputMaybe<Timestamptz_Comparison_Exp>;
  last_typed?: InputMaybe<Timestamptz_Comparison_Exp>;
  messages?: InputMaybe<Messages_Bool_Exp>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  products?: InputMaybe<Products_Bool_Exp>;
  products_aggregate?: InputMaybe<Products_Aggregate_Bool_Exp>;
  profile_image?: InputMaybe<String_Comparison_Exp>;
  uid?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userOrdersByUserId2?: InputMaybe<User_Orders_Bool_Exp>;
  userOrdersByUserId2_aggregate?: InputMaybe<User_Orders_Aggregate_Bool_Exp>;
  userRelationshipsBySupplierId?: InputMaybe<User_Relationships_Bool_Exp>;
  userRelationshipsBySupplierId_aggregate?: InputMaybe<User_Relationships_Aggregate_Bool_Exp>;
  user_orders?: InputMaybe<User_Orders_Bool_Exp>;
  user_orders_aggregate?: InputMaybe<User_Orders_Aggregate_Bool_Exp>;
  user_relationships?: InputMaybe<User_Relationships_Bool_Exp>;
  user_relationships_aggregate?: InputMaybe<User_Relationships_Aggregate_Bool_Exp>;
  user_roles?: InputMaybe<User_Roles_Bool_Exp>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "uid" */
  UsersUidKey = 'users_uid_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  messages?: InputMaybe<Messages_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']['input']>;
  products?: InputMaybe<Products_Arr_Rel_Insert_Input>;
  profile_image?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
  userOrdersByUserId2?: InputMaybe<User_Orders_Arr_Rel_Insert_Input>;
  userRelationshipsBySupplierId?: InputMaybe<User_Relationships_Arr_Rel_Insert_Input>;
  user_orders?: InputMaybe<User_Orders_Arr_Rel_Insert_Input>;
  user_relationships?: InputMaybe<User_Relationships_Arr_Rel_Insert_Input>;
  user_roles?: InputMaybe<User_Roles_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_image?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  last_seen?: Maybe<Scalars['timestamptz']['output']>;
  last_typed?: Maybe<Scalars['timestamptz']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  profile_image?: Maybe<Scalars['String']['output']>;
  uid?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_seen?: InputMaybe<Order_By>;
  last_typed?: InputMaybe<Order_By>;
  messages_aggregate?: InputMaybe<Messages_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  products_aggregate?: InputMaybe<Products_Aggregate_Order_By>;
  profile_image?: InputMaybe<Order_By>;
  uid?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userOrdersByUserId2_aggregate?: InputMaybe<User_Orders_Aggregate_Order_By>;
  userRelationshipsBySupplierId_aggregate?: InputMaybe<User_Relationships_Aggregate_Order_By>;
  user_orders_aggregate?: InputMaybe<User_Orders_Aggregate_Order_By>;
  user_relationships_aggregate?: InputMaybe<User_Relationships_Aggregate_Order_By>;
  user_roles_aggregate?: InputMaybe<User_Roles_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileImage = 'profile_image',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_image?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "users" */
export type Users_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Users_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Users_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  last_seen?: InputMaybe<Scalars['timestamptz']['input']>;
  last_typed?: InputMaybe<Scalars['timestamptz']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  profile_image?: InputMaybe<Scalars['String']['input']>;
  uid?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  LastSeen = 'last_seen',
  /** column name */
  LastTyped = 'last_typed',
  /** column name */
  Name = 'name',
  /** column name */
  ProfileImage = 'profile_image',
  /** column name */
  Uid = 'uid',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  /** filter the rows which have to be updated */
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

export type MessagesSubscriptionSubscriptionVariables = Exact<{
  userId1: Scalars['Int']['input'];
  userId2: Scalars['Int']['input'];
}>;


export type MessagesSubscriptionSubscription = { __typename?: 'subscription_root', messages: Array<{ __typename?: 'messages', id: number, text: string, timestamp: any, user_id: number, user: { __typename?: 'users', name?: string | null, profile_image?: string | null } }> };

export type InsertMessageMutationVariables = Exact<{
  object: Messages_Insert_Input;
}>;


export type InsertMessageMutation = { __typename?: 'mutation_root', insert_messages_one?: { __typename?: 'messages', id: number, user_id: number } | null };

export type AddUserMutationVariables = Exact<{
  objects: Array<Users_Insert_Input> | Users_Insert_Input;
}>;


export type AddUserMutation = { __typename?: 'mutation_root', insert_users?: { __typename?: 'users_mutation_response', affected_rows: number, returning: Array<{ __typename?: 'users', id: number }> } | null };

export type GetUsersByPkQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetUsersByPkQuery = { __typename?: 'query_root', users_by_pk?: { __typename?: 'users', email: string, id: number } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', email: string, id: number, uid: string, updated_at: any, created_at: any, last_seen: any }> };

export type UpdateUserLastSeenMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type UpdateUserLastSeenMutation = { __typename?: 'mutation_root', update_users_by_pk?: { __typename?: 'users', id: number, last_seen: any } | null };

export type GetUserQueryVariables = Exact<{
  uid: String_Comparison_Exp;
}>;


export type GetUserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number }> };


export const MessagesSubscriptionDocument = gql`
    subscription messagesSubscription($userId1: Int!, $userId2: Int!) {
  messages(
    order_by: {id: desc}
    where: {_or: [{user_id: {_eq: $userId1}}, {user_id: {_eq: $userId2}}]}
  ) {
    id
    text
    timestamp
    user_id
    user {
      name
      profile_image
    }
  }
}
    `;

/**
 * __useMessagesSubscriptionSubscription__
 *
 * To run a query within a React component, call `useMessagesSubscriptionSubscription` and pass it any options that fit your needs.
 * When your component renders, `useMessagesSubscriptionSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMessagesSubscriptionSubscription({
 *   variables: {
 *      userId1: // value for 'userId1'
 *      userId2: // value for 'userId2'
 *   },
 * });
 */
export function useMessagesSubscriptionSubscription(baseOptions: Apollo.SubscriptionHookOptions<MessagesSubscriptionSubscription, MessagesSubscriptionSubscriptionVariables> & ({ variables: MessagesSubscriptionSubscriptionVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<MessagesSubscriptionSubscription, MessagesSubscriptionSubscriptionVariables>(MessagesSubscriptionDocument, options);
      }
export type MessagesSubscriptionSubscriptionHookResult = ReturnType<typeof useMessagesSubscriptionSubscription>;
export type MessagesSubscriptionSubscriptionResult = Apollo.SubscriptionResult<MessagesSubscriptionSubscription>;
export const InsertMessageDocument = gql`
    mutation insertMessage($object: messages_insert_input!) {
  insert_messages_one(object: $object) {
    id
    user_id
  }
}
    `;
export type InsertMessageMutationFn = Apollo.MutationFunction<InsertMessageMutation, InsertMessageMutationVariables>;

/**
 * __useInsertMessageMutation__
 *
 * To run a mutation, you first call `useInsertMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertMessageMutation, { data, loading, error }] = useInsertMessageMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertMessageMutation(baseOptions?: Apollo.MutationHookOptions<InsertMessageMutation, InsertMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertMessageMutation, InsertMessageMutationVariables>(InsertMessageDocument, options);
      }
export type InsertMessageMutationHookResult = ReturnType<typeof useInsertMessageMutation>;
export type InsertMessageMutationResult = Apollo.MutationResult<InsertMessageMutation>;
export type InsertMessageMutationOptions = Apollo.BaseMutationOptions<InsertMessageMutation, InsertMessageMutationVariables>;
export const AddUserDocument = gql`
    mutation addUser($objects: [users_insert_input!]!) {
  insert_users(objects: $objects) {
    returning {
      id
    }
    affected_rows
  }
}
    `;
export type AddUserMutationFn = Apollo.MutationFunction<AddUserMutation, AddUserMutationVariables>;

/**
 * __useAddUserMutation__
 *
 * To run a mutation, you first call `useAddUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addUserMutation, { data, loading, error }] = useAddUserMutation({
 *   variables: {
 *      objects: // value for 'objects'
 *   },
 * });
 */
export function useAddUserMutation(baseOptions?: Apollo.MutationHookOptions<AddUserMutation, AddUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddUserMutation, AddUserMutationVariables>(AddUserDocument, options);
      }
export type AddUserMutationHookResult = ReturnType<typeof useAddUserMutation>;
export type AddUserMutationResult = Apollo.MutationResult<AddUserMutation>;
export type AddUserMutationOptions = Apollo.BaseMutationOptions<AddUserMutation, AddUserMutationVariables>;
export const GetUsersByPkDocument = gql`
    query getUsersByPk($id: Int!) {
  users_by_pk(id: $id) {
    email
    id
  }
}
    `;

/**
 * __useGetUsersByPkQuery__
 *
 * To run a query within a React component, call `useGetUsersByPkQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersByPkQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersByPkQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUsersByPkQuery(baseOptions: Apollo.QueryHookOptions<GetUsersByPkQuery, GetUsersByPkQueryVariables> & ({ variables: GetUsersByPkQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersByPkQuery, GetUsersByPkQueryVariables>(GetUsersByPkDocument, options);
      }
export function useGetUsersByPkLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersByPkQuery, GetUsersByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersByPkQuery, GetUsersByPkQueryVariables>(GetUsersByPkDocument, options);
        }
export function useGetUsersByPkSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersByPkQuery, GetUsersByPkQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersByPkQuery, GetUsersByPkQueryVariables>(GetUsersByPkDocument, options);
        }
export type GetUsersByPkQueryHookResult = ReturnType<typeof useGetUsersByPkQuery>;
export type GetUsersByPkLazyQueryHookResult = ReturnType<typeof useGetUsersByPkLazyQuery>;
export type GetUsersByPkSuspenseQueryHookResult = ReturnType<typeof useGetUsersByPkSuspenseQuery>;
export type GetUsersByPkQueryResult = Apollo.QueryResult<GetUsersByPkQuery, GetUsersByPkQueryVariables>;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    email
    id
    uid
    updated_at
    created_at
    last_seen
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export function useGetUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersSuspenseQueryHookResult = ReturnType<typeof useGetUsersSuspenseQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const UpdateUserLastSeenDocument = gql`
    mutation updateUserLastSeen($id: Int!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {last_seen: "now()"}) {
    id
    last_seen
  }
}
    `;
export type UpdateUserLastSeenMutationFn = Apollo.MutationFunction<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>;

/**
 * __useUpdateUserLastSeenMutation__
 *
 * To run a mutation, you first call `useUpdateUserLastSeenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserLastSeenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserLastSeenMutation, { data, loading, error }] = useUpdateUserLastSeenMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateUserLastSeenMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>(UpdateUserLastSeenDocument, options);
      }
export type UpdateUserLastSeenMutationHookResult = ReturnType<typeof useUpdateUserLastSeenMutation>;
export type UpdateUserLastSeenMutationResult = Apollo.MutationResult<UpdateUserLastSeenMutation>;
export type UpdateUserLastSeenMutationOptions = Apollo.BaseMutationOptions<UpdateUserLastSeenMutation, UpdateUserLastSeenMutationVariables>;
export const GetUserDocument = gql`
    query getUser($uid: String_comparison_exp!) {
  users(where: {uid: $uid}) {
    id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      uid: // value for 'uid'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;