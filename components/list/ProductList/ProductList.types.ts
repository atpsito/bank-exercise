// Interfaces and types from component ProductList

import { Product } from "@/types/products.types";

// Component Props
export interface ProductListProps {
  products: Product[];
  isLoading: boolean;
  isError: boolean;
}
