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
};

export type UserType = User & {
  stsTokenManager: { accessToken: string | undefined; expirationTime: string };
};
