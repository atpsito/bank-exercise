import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const createScreenStyles = StyleSheet.create({
  createScreenStyle: {
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
});

export default createScreenStyles;
