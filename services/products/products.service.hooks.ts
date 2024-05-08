import { QueryOptions, useQuery } from "@tanstack/react-query";

import { fetchProducts } from "./products.service";
import { Product } from "@/types/products.types";

export const useFetchProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
};
