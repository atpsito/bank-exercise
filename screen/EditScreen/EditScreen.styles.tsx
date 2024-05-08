import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";

const editScreenStyles = StyleSheet.create({
  editScreenStyle: {
    flex: 1,
    backgroundColor: "white",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.secondary,
    marginBottom: 24,
  },
});

export default editScreenStyles;
