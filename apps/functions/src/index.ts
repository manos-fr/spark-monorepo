import * as functions from 'firebase-functions';

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!');
});

exports.onUserDeleted = () =>
  functions.auth.user().onDelete(async (user) => {
    const deletedUserUid = user.uid;
    try {
      console.log(
        'Deleting user data from local database for user with UID:',
        deletedUserUid,
      );
    } catch (error) {
      console.error('Error deleting user data:', error);
    }
  });
