// import { gql } from 'graphql-request';

// export const getCompanies = gql`
//   query getCompanies($searchTerm: String = "%%") {
//     companies(
//       where: {
//         _or: [
//           { code: { _ilike: $searchTerm } }
//           { name: { _ilike: $searchTerm } }
//         ]
//       }
//     ) {
//       id
//       name
//       code
//     }
//   }
// `;

// export const getCompaniesByFilter = gql`
//   query getCompaniesByFilter(
//     $filters: [companies_bool_exp!]
//     $limit: Int = 10
//   ) {
//     companies(where: { _or: $filters, id: { _neq: 1 } }, limit: $limit) {
//       id
//       name
//       code
//     }
//   }
// `;
