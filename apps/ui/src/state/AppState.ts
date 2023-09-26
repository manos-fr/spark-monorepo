import { Product } from '@spark-monorepo/spark-shared';

export type CartState = {
  user_id: string | undefined;
  products: Product[] | [];
  removeProduct: (id: number) => void;
  addProduct: (product: Product) => void;
  emptyCart: () => void;
};
