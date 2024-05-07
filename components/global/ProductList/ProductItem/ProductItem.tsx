import React from "react";
import { Text, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { ProductItemProps as Props } from "./ProductItem.types";
import styles from "./ProductItem.styles";
import colors from "@/constants/Colors";

const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const { name, id } = product;

  return (
    <View style={styles.productItemStyle}>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={styles.productId}>ID: {id}</Text>
      </View>
      <ChevronRight stroke={colors.grey} />
    </View>
  );
};

export default ProductItem;
