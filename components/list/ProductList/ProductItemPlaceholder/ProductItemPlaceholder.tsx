import React from "react";
import { Text, View } from "react-native";

import { ProductItemPlaceholderProps as Props } from "./ProductItemPlaceholder.types";
import styles from "./ProductItemPlaceholder.styles";

const ProductItemPlaceholder: React.FC<Props> = (props) => {
  return (
    <View style={styles.productItemPlaceholderStyle}>
      <View style={styles.productInfo}>
        <View style={styles.productName} />
        <View style={styles.productId} />
      </View>
      <View style={styles.chevronPlaceholder} />
    </View>
  );
};

export default ProductItemPlaceholder;
