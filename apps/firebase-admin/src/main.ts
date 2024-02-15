import admin, { ServiceAccount } from 'firebase-admin';

const { SERVICE_ACCOUNT_KEY } = process.env;

admin.initializeApp({
  credential: admin.credential.cert(
    JSON.parse(SERVICE_ACCOUNT_KEY satisfies string) satisfies ServiceAccount,
  ),
});

const main = async () => {
  try {
    if (process.argv.some((arg) => arg === '--delete-all-users')) {
      await deleteAllUsers();
      console.log('Done!');
      process.exit(0);
    }
  } catch (error) {
    console.log({ error });
  }
};

const deleteAllUsers = async () => {
  try {
    const listUsersResult = await admin.auth().listUsers();
    const deletedUsersIds = [];
    const deletedUsersPromises = listUsersResult.users.map((userRecord) => {
      deletedUsersIds.push(userRecord.uid);
      return admin.auth().deleteUser(userRecord.uid);
    });
    await Promise.all(deletedUsersPromises);
    console.log({ deletedUsersIds });
  } catch (error) {
    console.error('Error deleting users:', error);
    throw new Error(error);
  }
};

(async () => {
  await main();
})();
