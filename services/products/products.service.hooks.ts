import { QueryOptions, useQuery } from "@tanstack/react-query";

import { fetchProducts } from "./products.service";

export const useFetchProducts = (queryOptions: QueryOptions = {}) => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    ...queryOptions,
  });
};
