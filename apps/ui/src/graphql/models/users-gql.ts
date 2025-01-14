import { gql } from 'graphql-request';

export const addUser = gql`
  mutation addUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
      returning {
        id
      }
      affected_rows
    }
  }
`;

export const getUsersByPk = gql`
  query getUsersByPk($id: Int!) {
    users_by_pk(id: $id) {
      email
      id
    }
  }
`;

export const getUsers = gql`
  query getUsers {
    users {
      email
      name
      id
      uid
      name
      profile_image
      updated_at
      created_at
      last_seen
    }
  }
`;

export const updateUserLastSeen = gql`
  mutation updateUserLastSeen($id: Int!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { last_seen: "now()" }) {
      id
      last_seen
    }
  }
`;

export const getUser = gql`
  query getUser($uid: String_comparison_exp!) {
    users(where: { uid: $uid }) {
      id
      name
    }
  }
`;

export const getUserSuppliers = gql`
  query getUserSuppliers($id: Int!) {
    user_relationships(where: { owner_id: { _eq: $id } }) {
      supplier: userBySupplierId {
        id
        name
        profile_image
        address
      }
    }
  }
`;
