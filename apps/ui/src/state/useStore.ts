import { create } from 'zustand';
import { CartState } from './AppState';
import { Product } from '@spark-monorepo/spark-shared';

export const useCartStore = create<CartState>((set, get) => ({
  user_id: undefined,
  products: [],

  removeProduct: (id: number) => {
    const { products } = get();
    const newProducts: Product[] = products.filter(
      (pr: Product) => pr?.id !== id
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
