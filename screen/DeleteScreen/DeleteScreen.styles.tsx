import { StyleSheet } from "react-native";

import colors from "@/constants/Colors";

const deleteScreenStyles = StyleSheet.create({
  deleteScreenStyle: {
    flex: 1,
    justifyContent: "flex-end",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    textAlign: "center",
  },
  modalClose: {
    width: "100%",
    alignItems: "flex-end",
    borderBottomWidth: 1,
    borderBottomColor: colors.border1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  actions: {
    gap: 8,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderColor: colors.border1,
  },
  info: {
    padding: 24,
  },
});

export default deleteScreenStyles;
