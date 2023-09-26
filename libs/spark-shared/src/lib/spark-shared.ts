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
