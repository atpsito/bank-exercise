import React from "react";
import { Text, View } from "react-native";

import { LoadingListProps as Props } from "./LoadingList.types";
import styles from "./LoadingList.styles";
import ProductItemPlaceholder from "@/components/list/ProductList/ProductItemPlaceholder/ProductItemPlaceholder";

const LoadingList: React.FC<Props> = (props) => {
  return (
    <View style={styles.loadingListStyle}>
      <ProductItemPlaceholder />
      <ProductItemPlaceholder />
      <ProductItemPlaceholder />
    </View>
  );
};

export default LoadingList;
