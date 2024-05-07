import React from "react";
import { Text, View } from "react-native";

import { ListScreenProps as Props } from "./ListScreen.types";
import styles from "./ListScreen.styles";
import SearchInput from "@/components/global/SearchInput/SearchInput";
import { useFetchProducts } from "@/services/products/products.service.hooks";
import ProductItem from "@/components/global/ProductList/ProductItem/ProductItem";
import ProductList from "@/components/global/ProductList/ProductList";
import { Product } from "@/types/products.types";

const ListScreen: React.FC<Props> = (props) => {
  const { data, isLoading } = useFetchProducts();
  console.log(data);

  return (
    <View style={styles.listScreenStyle}>
      <SearchInput />
      {data ? <ProductList products={data as Product[]} /> : null}
    </View>
  );
};

export default ListScreen;
