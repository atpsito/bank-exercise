import React from "react";
import { FlatList } from "react-native";

import { ProductListProps as Props } from "./ProductList.types";
import styles from "./ProductList.styles";
import ProductItem from "./ProductItem/ProductItem";
import EmptyList from "@/components/global/EmptyList/EmptyList";
import LoadingList from "@/components/global/LoadingList/LoadingList";
import ErrorList from "@/components/global/ErrorList/ErrorList";

const ProductList: React.FC<Props> = (props) => {
  const { products, isLoading, isError } = props;
  const renderEmptyList = () => {
    if (isLoading) {
      return <LoadingList />;
    } else if (isError) {
      return <ErrorList />;
    } else {
      return <EmptyList />;
    }
  };

  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
      style={styles.productListStyle}
      contentContainerStyle={{ flexGrow: 1 }}
      ListEmptyComponent={renderEmptyList}
    />
  );
};

export default ProductList;
