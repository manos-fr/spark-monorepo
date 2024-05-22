import { create } from 'zustand';
import { AuthState, CartState, ErrorState } from './AppState';
import { Credentials, Product } from '@spark-monorepo/spark-shared';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  signOut,
  User,
  updateProfile,
} from 'firebase/auth';
import { emailVerification } from '../utils/auth-utils';
import { auth } from '../../firebase-config';
import { router } from 'expo-router';

export const useCartStore = create<CartState>((set, get) => ({
  user_id: undefined,
  products: [],

  removeProduct: (id: number) => {
    const { products } = get();
    const newProducts: Product[] = products.filter(
      (pr: Product) => pr?.id !== id,
    );
    set({ products: newProducts });
  },
  addProduct: (product: Product) => {
    const { products } = get();
    const newProducts = [...products, product];
    set({ products: newProducts });
  },
  emptyCart: () => {
    set({ products: [] });
  },
}));

export const useAuthStore = create<AuthState>((set, get) => ({
  user: auth?.currentUser,
  dbUser: null,
  auth: null,
  initialized: false,
  isLoggedIn: false,
  appRegister: async (auth: Auth | null, credentials: Credentials) => {
    const { email, password, displayName } = credentials;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth as Auth,
        email as string,
        password as string,
      );
      if (auth?.currentUser) {
        await emailVerification();
        console.log('Verification mail sent');
      }
      await updateProfile(user as User, { displayName: displayName as string });
      set(() => ({ user, isLoggedIn: true }));

      return { isLoggedIn: get().isLoggedIn, user } satisfies {
        isLoggedIn: boolean;
        user: User;
      };
    } catch (error) {
      console.log('register handled error', { error });
      useErrorStore.setState(() => ({ error }));
      router.push('/sign-up');
    }
  },

  appLogin: async (auth: Auth | null, credentials: Credentials) => {
    const { email, password } = credentials;
    try {
      const { user } = await signInWithEmailAndPassword(
        auth as Auth,
        email as string,
        password as string,
      );
      set(() => ({ user, isLoggedIn: true }));
      return { isLoggedIn: get().isLoggedIn, user } satisfies {
        isLoggedIn: boolean;
        user: User;
      };
    } catch (error) {
      console.log(error);
      useErrorStore.setState(() => ({ error }));
    }
  },

  appSignOut: async (auth: Auth | null) => {
    try {
      await signOut(auth as Auth);
      set(() => ({
        user: null,
        dbUser: null,
        isLoggedIn: false,
      }));
      useErrorStore.setState(() => ({ error: undefined }));
      return { isLoggedIn: get().isLoggedIn } satisfies { isLoggedIn: boolean };
    } catch (error) {
      console.log(error);
      useErrorStore.setState(() => ({ error }));
    }
  },
}));

export const useErrorStore = create<ErrorState>((set) => ({
  error: undefined,
  setError: (error) => {
    set({ error });
    console.log({ error });
  },
  clearError: () => set({ error: undefined }),
}));
