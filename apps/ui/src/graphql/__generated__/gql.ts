/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  subscription messagesSubscription($_eq: Int = 10) {\n    messages(\n      where: { user_id: { _eq: $_eq } }\n      order_by: { id: desc }\n      limit: 1\n    ) {\n      id\n      text\n      timestamp\n      user_id\n    }\n  }\n": types.MessagesSubscriptionDocument,
    "\n  mutation addUser($objects: [users_insert_input!]!) {\n    insert_users(objects: $objects) {\n      returning {\n        id\n      }\n      affected_rows\n    }\n  }\n": types.AddUserDocument,
    "\n  query getUsersByPk($id: Int!) {\n    users_by_pk(id: $id) {\n      email\n      id\n    }\n  }\n": types.GetUsersByPkDocument,
    "\n  query getUsers {\n    users {\n      email\n      id\n      uid\n      updated_at\n      created_at\n      last_seen\n    }\n  }\n": types.GetUsersDocument,
    "\n  mutation updateUserLastSeen($id: Int!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: \"now()\" }) {\n      id\n      last_seen\n    }\n  }\n": types.UpdateUserLastSeenDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  subscription messagesSubscription($_eq: Int = 10) {\n    messages(\n      where: { user_id: { _eq: $_eq } }\n      order_by: { id: desc }\n      limit: 1\n    ) {\n      id\n      text\n      timestamp\n      user_id\n    }\n  }\n"): (typeof documents)["\n  subscription messagesSubscription($_eq: Int = 10) {\n    messages(\n      where: { user_id: { _eq: $_eq } }\n      order_by: { id: desc }\n      limit: 1\n    ) {\n      id\n      text\n      timestamp\n      user_id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation addUser($objects: [users_insert_input!]!) {\n    insert_users(objects: $objects) {\n      returning {\n        id\n      }\n      affected_rows\n    }\n  }\n"): (typeof documents)["\n  mutation addUser($objects: [users_insert_input!]!) {\n    insert_users(objects: $objects) {\n      returning {\n        id\n      }\n      affected_rows\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUsersByPk($id: Int!) {\n    users_by_pk(id: $id) {\n      email\n      id\n    }\n  }\n"): (typeof documents)["\n  query getUsersByPk($id: Int!) {\n    users_by_pk(id: $id) {\n      email\n      id\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query getUsers {\n    users {\n      email\n      id\n      uid\n      updated_at\n      created_at\n      last_seen\n    }\n  }\n"): (typeof documents)["\n  query getUsers {\n    users {\n      email\n      id\n      uid\n      updated_at\n      created_at\n      last_seen\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation updateUserLastSeen($id: Int!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: \"now()\" }) {\n      id\n      last_seen\n    }\n  }\n"): (typeof documents)["\n  mutation updateUserLastSeen($id: Int!) {\n    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: \"now()\" }) {\n      id\n      last_seen\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;