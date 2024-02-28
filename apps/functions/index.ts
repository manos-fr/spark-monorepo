import * as functions from 'firebase-functions';
import { gql, GraphQLClient } from 'graphql-request';

const { HASURA_GRAPHQL_URL, HASURA_ADMIN_SECRET } = process.env;

const headers = {
  'x-hasura-admin-secret': HASURA_ADMIN_SECRET,
};

const deleteUserByUid = gql`
  mutation deleteUserByUid($uid: String!) {
    delete_users(where: { uid: { _eq: $uid } }) {
      affected_rows
    }
  }
`;

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.onUserDeleted = functions.auth.user().onDelete(async (user) => {
  const deletedUserUid = user.uid;
  try {
    const client = new GraphQLClient(HASURA_GRAPHQL_URL, {
      headers: { ...headers },
    });

    const deletedLocalUserData = await client.request(deleteUserByUid, {
      uid: deletedUserUid,
    });

    console.log(
      'Deleting user data from local database for user with UID:',
      deletedLocalUserData,
    );
  } catch (error) {
    console.error('Error deleting user data:', error);
  }
});
