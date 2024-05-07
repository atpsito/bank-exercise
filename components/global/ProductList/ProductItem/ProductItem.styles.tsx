import { StyleSheet } from "react-native";
import colors from "@/constants/Colors";

const productItemStyles = StyleSheet.create({
  productItemStyle: {
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
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.secondary,
  },
  productId: {
    fontSize: 14,
    color: colors.grey,
  },
  icon: {
    color: colors.grey,
  },
});

export default productItemStyles;
