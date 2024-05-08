import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { ChevronRight } from "lucide-react-native";

import { ProductItemProps as Props } from "./ProductItem.types";
import styles from "./ProductItem.styles";
import colors from "@/constants/Colors";
import { Link } from "expo-router";

const ProductItem: React.FC<Props> = (props) => {
  const { product } = props;
  const { name, id } = product;

  return (
    <Link
      href={{
        pathname: `/(bank)/${id}/details`,
      }}
      asChild
    >
      <TouchableOpacity style={styles.productItemStyle}>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productId}>ID: {id}</Text>
        </View>
        <ChevronRight stroke={colors.grey} />
      </TouchableOpacity>
    </Link>
  );
};

export default ProductItem;
