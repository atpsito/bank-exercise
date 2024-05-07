import React from "react";
import { FlatList } from "react-native";

import { ProductListProps as Props } from "./ProductList.types";
import styles from "./ProductList.styles";
import ProductItem from "./ProductItem/ProductItem";

const ProductList: React.FC<Props> = (props) => {
  const { products } = props;
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductItem product={item} />}
      keyExtractor={(item) => item.id}
      style={styles.productListStyle}
    />
  );
};

export default ProductList;
