// import { gql } from 'graphql-request';

// export const getUserIdByOid = gql`
//   query getUserId($oid: String!) {
//     users(where: { oid: { _eq: $oid } }) {
//       id
//     }
//   }
// `;

// export const getUsersByFilter = gql`
//   query getUsersByFilter(
//     $filters: [users_bool_exp!]
//     $limit: Int = 10
//     $orderBy: [users_order_by!] = []
//   ) {
//     users(
//       where: {
//         _or: $filters
//         oid: { _neq: "00000000-0000-0000-0000-000000000000" }
//       }
//       limit: $limit
//       order_by: $orderBy
//     ) {
//       name
//       email
//       oid
//       id
//     }
//   }
// `;

// export const getUser = gql`
//   query getUser($id: Int!) {
//     users(where: { id: { _eq: $id } }) {
//       id
//       name
//       email
//       active
//       settings
//       language
//       locale
//       assigned_srus {
//         service_rendering_unit {
//           id
//           name
//         }
//       }
//       business_admin
//       system_admin
//       user_roles {
//         company {
//           id
//           name
//         }
//         role {
//           key
//           translations
//           id
//         }
//       }
//     }
//   }
// `;

// export const getUsers = gql`
//   query getUsers(
//     $offset: Int!
//     $limit: Int!
//     $orderBy: users_order_by!
//     $searchTerm: String
//     $filters: [users_bool_exp!]
//   ) {
//     users(
//       offset: $offset
//       limit: $limit
//       order_by: [$orderBy]
//       where: {
//         _and: [
//           {
//             _or: [
//               { name: { _ilike: $searchTerm } }
//               { email: { _ilike: $searchTerm } }
//             ]
//           }
//           { _and: $filters }
//         ]
//       }
//     ) {
//       name
//       email
//       oid
//       id
//       active
//       business_admin
//       system_admin
//       user_roles {
//         company {
//           id
//           name
//           code
//         }
//         role {
//           key
//           translations
//           id
//         }
//       }
//     }
//     users_aggregate(
//       where: {
//         _and: [
//           {
//             _or: [
//               { name: { _ilike: $searchTerm } }
//               { email: { _ilike: $searchTerm } }
//             ]
//           }
//           { _and: $filters }
//         ]
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const searchUsersQuery = gql`
//   query searchUsers($term: String, $filter: users_bool_exp!) {
//     users(
//       where: {
//         name: { _ilike: $term }
//         _and: [
//           $filter
//           { oid: { _neq: "00000000-0000-0000-0000-000000000000" } }
//           { active: { _eq: true } }
//         ]
//       }
//     ) {
//       id
//       oid
//       name
//       email
//       active
//     }
//   }
// `;

// export const updateProfile = gql`
//   mutation updateProfile($userId: Int!, $language: String!, $locale: String!) {
//     update_users_by_pk(
//       pk_columns: { id: $userId }
//       _set: { locale: $locale, language: $language }
//     ) {
//       id
//       name
//       locale
//       language
//     }
//   }
// `;

// export const updateUserSettings = gql`
//   mutation updateUserSettings($id: Int!, $set: users_set_input!) {
//     update_users_by_pk(pk_columns: { id: $id }, _set: $set) {
//       id
//     }
//   }
// `;

// export const updateUser = gql`
//   mutation updateUser(
//     $id: Int!
//     $set: users_set_input
//     $rolesToAdd: [user_roles_insert_input!]!
//     $srusToAdd: [users_service_rendering_units_insert_input!]!
//     $deleteUserRolesFilters: user_roles_bool_exp!
//     $deleteUserSrusFilters: users_service_rendering_units_bool_exp!
//   ) {
//     update_users_by_pk(pk_columns: { id: $id }, _set: $set) {
//       id
//     }
//     delete_user_roles(where: $deleteUserRolesFilters) {
//       affected_rows
//     }
//     insert_user_roles(
//       objects: $rolesToAdd
//       on_conflict: { constraint: user_roles_pkey, update_columns: [] }
//     ) {
//       affected_rows
//     }
//     delete_users_service_rendering_units(where: $deleteUserSrusFilters) {
//       affected_rows
//     }
//     insert_users_service_rendering_units(
//       objects: $srusToAdd
//       on_conflict: {
//         constraint: users_service_rendering_units_pkey
//         update_columns: []
//       }
//     ) {
//       affected_rows
//     }
//   }
// `;

// export const getUsersByServiceRenderingUnitId = gql`
//   query getUsersByServiceRenderingUnitId(
//     $queryParams: Int!
//     $offset: Int!
//     $limit: Int!
//     $orderBy: users_order_by!
//     $searchTerm: String
//     $filters: [users_bool_exp!]
//   ) {
//     users(
//       offset: $offset
//       limit: $limit
//       order_by: [$orderBy]
//       where: {
//         assigned_srus: { service_rendering_unit_id: { _eq: $queryParams } }
//         name: { _ilike: $searchTerm }
//         _and: $filters
//       }
//     ) {
//       active
//       author_id
//       created_at
//       editor_id
//       email
//       name
//       id
//       locale
//       oid
//       assigned_srus {
//         service_rendering_unit_id
//       }
//     }
//     users_aggregate(
//       where: {
//         assigned_srus: { service_rendering_unit_id: { _eq: $queryParams } }
//       }
//     ) {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const getUsersByIds = gql`
//   query getUsersByIds($ids: [Int!]) {
//     users(where: { id: { _in: $ids } }) {
//       id
//       name
//       email
//     }
//   }
// `;

// export const getUserWithNameById = gql`
//   query getUserWithNameById($id: Int = -1) {
//     users_by_pk(id: $id) {
//       id
//       name
//     }
//   }
// `;

// export const addUser = gql`
//   mutation addUser($user: users_insert_input!) {
//     insert_users_one(object: $user) {
//       id
//     }
//   }
// `;

// export const SearchInternalUserDocument = gql`
//   query searchInternalUser($term: String) {
//     internal_directory_users(q: $term, size: 10) {
//       data {
//         email
//         givenName
//         surname
//         adSamAccountName
//         adUserPrincipalName
//         companyName
//         createdDateTime
//         displayName
//         objectId
//         telephoneNumber
//         userPrincipalName
//         isRegistered
//         signInName
//       }
//     }
//   }
// `;
