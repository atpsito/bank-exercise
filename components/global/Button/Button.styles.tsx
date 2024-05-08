import colors from "@/constants/Colors";
import { StyleSheet } from "react-native";

const buttonStyles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    width: "100%",
    borderRadius: 4,
  },
  buttonPrimary: {
    backgroundColor: colors.primary,
  },
  buttonInfo: {
    backgroundColor: colors.grey2,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  buttonDanger: {
    backgroundColor: colors.danger,
  },
  text: {
    fontSize: 14,
    fontWeight: "600",
  },
  textPrimary: {
    color: colors.secondary,
  },
  textInfo: {
    color: colors.secondary,
  },
  textDanger: {
    color: colors.white,
  },
});

export default buttonStyles;
