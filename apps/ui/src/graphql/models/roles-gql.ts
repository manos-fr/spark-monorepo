// import { gql } from 'graphql-request';

// export const getRoles = gql`
//   query getRoles($offset: Int, $limit: Int) {
//     roles(offset: $offset, limit: $limit) {
//       id
//       key
//       translations
//       description
//       role_profiles {
//         role_profile_id
//       }
//     }
//     roles_aggregate {
//       aggregate {
//         count
//       }
//     }
//   }
// `;

// export const getRolesWithFilters = gql`
//   query getRolesWithFilters(
//     $offset: Int
//     $limit: Int
//     $orderBy: roles_order_by!
//     $searchTerm: String
//     $filters: [roles_bool_exp!]
//   ) {
//     roles(
//       offset: $offset
//       limit: $limit
//       order_by: [$orderBy]
//       where: {
//         _and: [
//           {
//             _or: [
//               { key: { _ilike: $searchTerm } }
//               { description: { _ilike: $searchTerm } }
//             ]
//           }
//           { _and: $filters }
//         ]
//       }
//     ) {
//       id
//       key
//       translations
//       description
//       role_profiles {
//         role_profile_id
//       }
//     }
//     role_profiles(
//       offset: 0
//       limit: 1000000
//       where: { _and: [{ name: { _ilike: $searchTerm } }] }
//     ) {
//       id
//       name
//       roles {
//         role_id
//       }
//     }
//     roles_aggregate {
//       aggregate {
//         count
//       }
//     }
//   }
// `;
