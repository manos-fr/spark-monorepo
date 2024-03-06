import { gql } from 'graphql-request';

export const messagesSubscription = gql`
  subscription messagesSubscription($_eq: Int = 10) {
    messages(
      where: { user_id: { _eq: $_eq } }
      order_by: { id: desc }
      limit: 1
    ) {
      id
      text
      timestamp
      user_id
    }
  }
`;
