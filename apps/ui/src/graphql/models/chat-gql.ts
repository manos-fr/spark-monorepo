import { gql } from 'graphql-request';

export const userConversations = gql`
  query userConversations($userId: Int!) {
    conversation_users(where: { user_id: { _eq: $userId } }) {
      conversation {
        id
        name
        conversation_users {
          user_id
          user {
            name
            profile_image
          }
        }
      }
    }
  }
`;

export const messages = gql`
  query messages(
    $offset: Int!
    $limit: Int!
    $order_by: order_by!
    $conversationId: Int!
  ) {
    messages(
      limit: $limit
      order_by: { timestamp: $order_by }
      offset: $offset
      where: { conversation_id: { _eq: $conversationId } }
    ) {
      is_order
      sender_id
      text
      timestamp
      id
      user {
        email
        last_seen
        last_typed
        name
        profile_image
        id
      }
    }
  }
`;

export const insertConversation = gql`
  mutation insertConversation($object: conversations_insert_input!) {
    insert_conversations_one(object: $object) {
      id
    }
  }
`;

export const insertConversationUsers = gql`
  mutation insertConversationUsers(
    $objects: [conversation_users_insert_input!]!
  ) {
    insert_conversation_users(objects: $objects) {
      affected_rows
    }
  }
`;
export const insertMessages = gql`
  mutation insertMessages($objects: [messages_insert_input!]!) {
    insert_messages(objects: $objects) {
      affected_rows
    }
  }
`;

export const messagesSubscription = gql`
  subscription messagesSubscription(
    $offset: Int!
    $limit: Int!
    $order_by: order_by!
    $conversationId: Int!
  ) {
    messages(
      limit: $limit
      order_by: { timestamp: $order_by }
      offset: $offset
      where: { conversation_id: { _eq: $conversationId } }
    ) {
      is_order
      sender_id
      text
      timestamp
      id
      user {
        email
        last_seen
        last_typed
        name
        profile_image
        id
      }
    }
  }
`;

// OBJECTS INPUTS SAMPLE STRUCTURE FOR QUERIES MUTATIONS

// {"userId": 35}
// {"object": {"conversationId": 1}}
// {
//   "objects": [
//     {
//       "user_id": 1,
//       "conversation_id": 1
//     },
//     {
//       "user_id": 12,
//       "conversation_id": 1
//     }
//   ]
// }
// {"offset": 1, "limit": 10, "timestamp": "desc"}
// {"objects":
//   [
//     {
//   "conversation_id":1, "is_order": false, "sender_id": 1, "text": "ssss"
//     },
//     {
//   "conversation_id":1, "is_order": false, "sender_id": 1, "text": "lalalala"
// 		}
//   ]
// }
