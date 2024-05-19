import { User, sendEmailVerification } from 'firebase/auth';
import { auth } from '../firebase-config';

export const emailVerification = async () => {
  const user = auth.currentUser;
  try {
    await sendEmailVerification(user as User, {
      handleCodeInApp: true,
      url: 'https://hasura-auth-4f0a3.firebaseapp.com',
    });
    console.log('Email sent successfully');
  } catch (error) {
    console.log('Error sending the verification email:', error);
  }
};
