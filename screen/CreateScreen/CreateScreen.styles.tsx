import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const createScreenStyles = StyleSheet.create({
  createScreenStyle: {
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

export default createScreenStyles;
