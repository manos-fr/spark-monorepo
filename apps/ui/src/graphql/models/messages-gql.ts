import { gql } from 'graphql-request';

export const messagesSubscription = gql`
  subscription messagesSubscription(
    $userId1: Int!
    $userId2: Int!
    $order_by: order_by!
  ) {
    messages(
      order_by: { timestamp: $order_by }
      where: {
        _or: [
          { sender_id: { _eq: $userId1 } }
          { sender_id: { _eq: $userId2 } }
        ]
      }
    ) {
      id
      text
      timestamp
      sender_id
      is_order
      user {
        name
        profile_image
        id
      }
    }
  }
`;

export const insertMessage = gql`
  mutation insertMessage($object: messages_insert_input!) {
    insert_messages_one(object: $object) {
      id
      sender_id
    }
  }
`;

export const userConversations = gql`
  query userConversations($userId: Int!) {
    conversation_users(where: { user_id: { _eq: $userId } }) {
      conversation {
        id
        name
      }
    }
  }
`;
