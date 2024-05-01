import { gql } from 'graphql-request';

export const messagesSubscription = gql`
  subscription messagesSubscription {
    messages(order_by: { id: desc }) {
      id
      text
      timestamp
      user_id
      user {
        name
      }
    }
  }
`;
