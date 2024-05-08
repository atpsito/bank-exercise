import React from "react";
import { View } from "react-native";
import { Link } from "expo-router";

import { ListScreenProps as Props } from "./ListScreen.types";
import styles from "./ListScreen.styles";
import SearchInput from "@/components/global/SearchInput/SearchInput";
import { useFetchProducts } from "@/services/products/products.service.hooks";
import ProductList from "@/components/global/ProductList/ProductList";
import Button from "@/components/global/Button/Button";
import { Product } from "@/types/products.types";

const ListScreen: React.FC<Props> = (props) => {
  const { data, isLoading } = useFetchProducts();

  return (
    <View style={styles.listScreenStyle}>
      <SearchInput />
      <View style={styles.listScreenViewStyle}>
        {data ? <ProductList products={data as Product[]} /> : null}
      </View>
      <View style={styles.listScreenActionsStyle}>
        <Link href="/create" asChild>
          <Button buttonType="PRIMARY">
            Agregar
            </Button>
        </Link>
      </View>
    </View>
  );
};

export default ListScreen;
