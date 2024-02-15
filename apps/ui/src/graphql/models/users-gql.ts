import { gql } from 'graphql-request';

export const addUser = gql`
  mutation addUser($objects: [users_insert_input!]!) {
    insert_users(objects: $objects) {
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
      id
      uid
      updated_at
      created_at
      last_seen
    }
  }
`;
