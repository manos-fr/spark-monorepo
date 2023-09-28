import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };

function fetcher<TData, TVariables extends { [key: string]: any }>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    });
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  timestamptz: { input: any; output: any };
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
  Desc = 'DESC',
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "suppliers" */
  delete_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** delete single row from the table: "suppliers" */
  delete_suppliers_by_pk?: Maybe<Suppliers>;
  /** insert data into the table: "suppliers" */
  insert_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** insert a single row into the table: "suppliers" */
  insert_suppliers_one?: Maybe<Suppliers>;
  /** update data of the table: "suppliers" */
  update_suppliers?: Maybe<Suppliers_Mutation_Response>;
  /** update single row of the table: "suppliers" */
  update_suppliers_by_pk?: Maybe<Suppliers>;
  /** update multiples rows of table: "suppliers" */
  update_suppliers_many?: Maybe<Array<Maybe<Suppliers_Mutation_Response>>>;
};

/** mutation root */
export type Mutation_RootDelete_SuppliersArgs = {
  where: Suppliers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Suppliers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

/** mutation root */
export type Mutation_RootInsert_SuppliersArgs = {
  objects: Array<Suppliers_Insert_Input>;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Suppliers_OneArgs = {
  object: Suppliers_Insert_Input;
  on_conflict?: InputMaybe<Suppliers_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_SuppliersArgs = {
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  _set?: InputMaybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_By_PkArgs = {
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  _set?: InputMaybe<Suppliers_Set_Input>;
  pk_columns: Suppliers_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Suppliers_ManyArgs = {
  updates: Array<Suppliers_Updates>;
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
  DescNullsLast = 'desc_nulls_last',
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
};

export type Query_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Query_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Query_RootSuppliers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "suppliers" */
  suppliers: Array<Suppliers>;
  /** fetch aggregated fields from the table: "suppliers" */
  suppliers_aggregate: Suppliers_Aggregate;
  /** fetch data from the table: "suppliers" using primary key columns */
  suppliers_by_pk?: Maybe<Suppliers>;
  /** fetch data from the table in a streaming manner : "suppliers" */
  suppliers_stream: Array<Suppliers>;
};

export type Subscription_RootSuppliersArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootSuppliers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Suppliers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Suppliers_Order_By>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

export type Subscription_RootSuppliers_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_RootSuppliers_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Suppliers_Stream_Cursor_Input>>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** columns and relationships of "suppliers" */
export type Suppliers = {
  __typename?: 'suppliers';
  area: Scalars['String']['output'];
  code: Scalars['String']['output'];
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregated selection of "suppliers" */
export type Suppliers_Aggregate = {
  __typename?: 'suppliers_aggregate';
  aggregate?: Maybe<Suppliers_Aggregate_Fields>;
  nodes: Array<Suppliers>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_Fields = {
  __typename?: 'suppliers_aggregate_fields';
  avg?: Maybe<Suppliers_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Suppliers_Max_Fields>;
  min?: Maybe<Suppliers_Min_Fields>;
  stddev?: Maybe<Suppliers_Stddev_Fields>;
  stddev_pop?: Maybe<Suppliers_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Suppliers_Stddev_Samp_Fields>;
  sum?: Maybe<Suppliers_Sum_Fields>;
  var_pop?: Maybe<Suppliers_Var_Pop_Fields>;
  var_samp?: Maybe<Suppliers_Var_Samp_Fields>;
  variance?: Maybe<Suppliers_Variance_Fields>;
};

/** aggregate fields of "suppliers" */
export type Suppliers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Suppliers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Suppliers_Avg_Fields = {
  __typename?: 'suppliers_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "suppliers". All fields are combined with a logical 'AND'. */
export type Suppliers_Bool_Exp = {
  _and?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  _not?: InputMaybe<Suppliers_Bool_Exp>;
  _or?: InputMaybe<Array<Suppliers_Bool_Exp>>;
  area?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "suppliers" */
export enum Suppliers_Constraint {
  /** unique or primary key constraint on columns "id" */
  SuppliersPkey = 'suppliers_pkey',
}

/** input type for incrementing numeric columns in table "suppliers" */
export type Suppliers_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "suppliers" */
export type Suppliers_Insert_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate max on columns */
export type Suppliers_Max_Fields = {
  __typename?: 'suppliers_max_fields';
  area?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** aggregate min on columns */
export type Suppliers_Min_Fields = {
  __typename?: 'suppliers_min_fields';
  area?: Maybe<Scalars['String']['output']>;
  code?: Maybe<Scalars['String']['output']>;
  created_at?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updated_at?: Maybe<Scalars['timestamptz']['output']>;
};

/** response of any mutation on the table "suppliers" */
export type Suppliers_Mutation_Response = {
  __typename?: 'suppliers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Suppliers>;
};

/** on_conflict condition type for table "suppliers" */
export type Suppliers_On_Conflict = {
  constraint: Suppliers_Constraint;
  update_columns?: Array<Suppliers_Update_Column>;
  where?: InputMaybe<Suppliers_Bool_Exp>;
};

/** Ordering options when selecting data from "suppliers". */
export type Suppliers_Order_By = {
  area?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: suppliers */
export type Suppliers_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "suppliers" */
export enum Suppliers_Select_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "suppliers" */
export type Suppliers_Set_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate stddev on columns */
export type Suppliers_Stddev_Fields = {
  __typename?: 'suppliers_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Suppliers_Stddev_Pop_Fields = {
  __typename?: 'suppliers_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Suppliers_Stddev_Samp_Fields = {
  __typename?: 'suppliers_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "suppliers" */
export type Suppliers_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Suppliers_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Suppliers_Stream_Cursor_Value_Input = {
  area?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  created_at?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['timestamptz']['input']>;
};

/** aggregate sum on columns */
export type Suppliers_Sum_Fields = {
  __typename?: 'suppliers_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "suppliers" */
export enum Suppliers_Update_Column {
  /** column name */
  Area = 'area',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at',
}

export type Suppliers_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Suppliers_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Suppliers_Set_Input>;
  where: Suppliers_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Suppliers_Var_Pop_Fields = {
  __typename?: 'suppliers_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Suppliers_Var_Samp_Fields = {
  __typename?: 'suppliers_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Suppliers_Variance_Fields = {
  __typename?: 'suppliers_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
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

export type GetSuppliersQueryVariables = Exact<{ [key: string]: never }>;

export type GetSuppliersQuery = {
  __typename?: 'query_root';
  suppliers: Array<{
    __typename?: 'suppliers';
    area: string;
    code: string;
    id: number;
    name: string;
    created_at?: any | null;
    updated_at?: any | null;
  }>;
};

export const GetSuppliersDocument = `
    query getSuppliers {
  suppliers {
    area
    code
    id
    name
    created_at
    updated_at
  }
}
    `;
export const useGetSuppliersQuery = <
  TData = GetSuppliersQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: GetSuppliersQueryVariables,
  options?: UseQueryOptions<GetSuppliersQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<GetSuppliersQuery, TError, TData>(
    variables === undefined ? ['getSuppliers'] : ['getSuppliers', variables],
    fetcher<GetSuppliersQuery, GetSuppliersQueryVariables>(
      client,
      GetSuppliersDocument,
      variables,
      headers
    ),
    options
  );
