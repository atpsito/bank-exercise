import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";

const productItemPlaceholderStyles = StyleSheet.create({
  productItemPlaceholderStyle: {
    width: "100%",
    padding: 16,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
    gap: 8,
  },
  productName: {
    height: 20,
    backgroundColor: colors.grey,
    width: 150,
  },
  productId: {
    height: 20,
    backgroundColor: colors.grey,
    width: 100,
  },
  chevronPlaceholder: {
    height: 20,
    backgroundColor: colors.grey,
    width: 20,
  },
});

export default productItemPlaceholderStyles;
