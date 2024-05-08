import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const textInputStyles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border1,
    padding: 8,
    borderRadius: 8,
  },
  label: {
    color: colors.secondary,
    fontWeight: "500",
    marginBottom: 8,
  },
  error: {
    color: colors.danger,
    fontWeight: "500",
    marginBottom: 8,
  },
  disabled: {
    backgroundColor: colors.grey2,
  },
});

export default textInputStyles;
