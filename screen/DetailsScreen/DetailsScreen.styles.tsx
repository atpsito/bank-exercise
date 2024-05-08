import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";

const detailsScreenStyles = StyleSheet.create({
  detailsScreenStyle: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.secondary,
  },
  subtitle: {
    color: colors.secondary,
  },
  info: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 42,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  itemTitle: {
    color: colors.grey,
    fontWeight: "500",
  },
  itemValue: {
    color: colors.secondary,
    fontWeight: "500",
  },
  image: {
    height: 100,
    width: 200,
  },
  actions: {
    gap: 8,
  },
});

export default detailsScreenStyles;
