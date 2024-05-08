import { Credentials, Product } from '@spark-monorepo/spark-shared';
import { User, Auth } from 'firebase/auth';

export type CartState = {
  user_id: string | undefined;
  products: Product[] | [];
  removeProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  emptyCart: () => void;
};

export type AuthState = {
  user: User | null;
  dbUser:
    | (User & { id: number | undefined; profile_image?: string | null })
    | null;
  auth: Auth | null;
  initialized: boolean;
  isLoggedIn: boolean;
  registerError: string | undefined;
  loginError: string | undefined;
  generalError: any;
  appRegister: (
    auth: Auth | null,
    credentials: Credentials,
  ) => Promise<{ isLoggedIn: boolean; user: User } | undefined>;
  appLogin: (
    auth: Auth | null,
    credentials: Credentials,
  ) => Promise<{ isLoggedIn: boolean; user: User } | undefined>;
  appSignOut: (auth: Auth) => Promise<{ isLoggedIn: boolean } | undefined>;
};
