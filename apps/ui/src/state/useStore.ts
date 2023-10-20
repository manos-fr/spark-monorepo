import { create } from 'zustand';
import { AuthState, CartState } from './AppState';
import { Credentials, Product } from '@spark-monorepo/spark-shared';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  Auth,
  signOut,
} from 'firebase/auth';

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
  user: null,
  auth: null,
  initialized: false,
  isLoggedIn: false,
  loginError: undefined,
  registerError: undefined,
  generalError: undefined,
  appRegister: async (auth: Auth | null, credentials: Credentials) => {
    const { email, password } = credentials;
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth as Auth,
        email as string,
        password as string,
      );
      set(() => ({ user, isLoggedIn: true }));
      return { isLoggedIn: get().isLoggedIn, user };
    } catch (error: any) {
      console.log(error);
      set(() => ({ registerError: error.message }));
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
      return { isLoggedIn: get().isLoggedIn, user };
    } catch (error: any) {
      console.log(error);
      set({ loginError: error.message });
    }
  },
  appSignOut: async (auth: Auth | null) => {
    try {
      const appSignOutResponse = await signOut(auth as Auth);
      set(() => ({
        user: null,
        isLoggedIn: false,
        generalError: undefined,
        loginError: undefined,
        registerError: undefined,
      }));
      return { isLoggedIn: get().isLoggedIn, appSignOutResponse };
    } catch (error: any) {
      console.log(error);
    }
  },
}));
