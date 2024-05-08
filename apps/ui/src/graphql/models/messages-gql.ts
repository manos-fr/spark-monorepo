import { gql } from 'graphql-request';

export const messagesSubscription = gql`
  subscription messagesSubscription($userId1: Int!, $userId2: Int!) {
    messages(
      order_by: { id: desc }
      where: {
        _or: [{ user_id: { _eq: $userId1 } }, { user_id: { _eq: $userId2 } }]
      }
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

export const insertMessage = gql`
  mutation insertMessage($object: messages_insert_input!) {
    insert_messages_one(object: $object) {
      id
      user_id
    }
  }
`;
