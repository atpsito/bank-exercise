import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "white",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.border1,
    paddingBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
  },
});

export default styles;
