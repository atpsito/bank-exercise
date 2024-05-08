import React, { useMemo, useState } from "react";
import { View } from "react-native";
import { Link } from "expo-router";

import { ListScreenProps as Props } from "./ListScreen.types";
import styles from "./ListScreen.styles";
import SearchInput from "@/components/list/SearchInput/SearchInput";
import { useFetchProducts } from "@/services/products/products.service.hooks";
import ProductList from "@/components/list/ProductList/ProductList";
import Button from "@/components/global/Button/Button";
import { Product } from "@/types/products.types";

const ListScreen: React.FC<Props> = (props) => {
  const { data, isLoading, isError } = useFetchProducts();
  const [search, setSearch] = useState("");
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data?.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  return (
    <View style={styles.listScreenStyle}>
      <SearchInput onChangeText={setSearch} />
      <View style={styles.listScreenViewStyle}>
        <ProductList
          products={filteredData as Product[]}
          isError={isError}
          isLoading={isLoading}
        />
      </View>
      <View style={styles.listScreenActionsStyle}>
        <Link href="/create" asChild>
          <Button buttonType="PRIMARY">Agregar</Button>
        </Link>
      </View>
    </View>
  );
};

export default ListScreen;
