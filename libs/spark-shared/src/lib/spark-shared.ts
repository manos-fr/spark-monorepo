import { User } from 'firebase/auth';

export type Product =
  | {
      id?: number;
      name: string;
      category: string;
      description: string;
      supplier_id: number;
      price: number;
    }
  | undefined;

export type Credentials = {
  email: string | undefined;
  password: string | undefined;
  displayName?: string;
};

export type UserType = User & {
  stsTokenManager: { accessToken: string | undefined; expirationTime: string };
};

export enum FirebaseErrors {
  AUTH_EMAIL_ALREADY_IN_USE = 'auth/email-already-in-use',
  AUTH_INVALID_EMAIL = 'auth/invalid-email',
  AUTH_WRONG_PASSWORD = 'auth/wrong-password',
  AUTH_USER_NOT_FOUND = 'auth/user-not-found',
  AUTH_INVALID_PASSWORD = 'auth/invalid-password',
}
