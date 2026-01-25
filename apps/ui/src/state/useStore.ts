import { create } from 'zustand';
import { AuthState, CartState, ErrorState } from './AppState';
import {
  Credentials,
  Product,
  normalizeError,
} from '@spark-monorepo/spark-shared';
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

    if (!auth) {
      useErrorStore
        .getState()
        .setError(new Error('Authentication not initialized'));
      return;
    }

    if (!email || !password) {
      useErrorStore
        .getState()
        .setError(new Error('Email and password are required'));
      return;
    }

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      if (auth.currentUser) {
        await emailVerification();
        if (__DEV__) {
          console.log('Verification mail sent');
        }
      }

      if (displayName) {
        await updateProfile(user, { displayName });
      }

      set(() => ({ user, isLoggedIn: true }));

      return { isLoggedIn: get().isLoggedIn, user } satisfies {
        isLoggedIn: boolean;
        user: User;
      };
    } catch (error) {
      useErrorStore.getState().setError(error);
      router.push('/sign-up');
      return undefined;
    }
  },

  appLogin: async (auth: Auth | null, credentials: Credentials) => {
    const { email, password } = credentials;

    if (!auth) {
      useErrorStore
        .getState()
        .setError(new Error('Authentication not initialized'));
      return;
    }

    if (!email || !password) {
      useErrorStore
        .getState()
        .setError(new Error('Email and password are required'));
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      set(() => ({ user, isLoggedIn: true }));
      return { isLoggedIn: get().isLoggedIn, user } satisfies {
        isLoggedIn: boolean;
        user: User;
      };
    } catch (error) {
      useErrorStore.getState().setError(error);
      return undefined;
    }
  },

  appSignOut: async (auth: Auth | null) => {
    if (!auth) {
      useErrorStore
        .getState()
        .setError(new Error('Authentication not initialized'));
      return;
    }

    try {
      await signOut(auth);
      set(() => ({
        user: null,
        dbUser: null,
        isLoggedIn: false,
      }));
      useErrorStore.getState().clearError();
      return { isLoggedIn: get().isLoggedIn } satisfies { isLoggedIn: boolean };
    } catch (error) {
      useErrorStore.getState().setError(error);
      return undefined;
    }
  },
}));

export const useErrorStore = create<ErrorState>((set) => ({
  error: undefined,
  setError: (error: unknown) => {
    const normalizedError = normalizeError(error);
    set({ error: normalizedError });
    // Only log in development
    if (__DEV__) {
      console.log(
        'Error occurred:',
        normalizedError.type,
        normalizedError.message,
      );
    }
  },
  clearError: () => set({ error: undefined }),
}));
