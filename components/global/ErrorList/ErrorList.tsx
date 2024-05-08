import React from "react";
import { Text, View } from "react-native";
import { MessageCircleX } from "lucide-react-native";

import { ErrorListProps as Props } from "./ErrorList.types";
import styles from "./ErrorList.styles";
import colors from "@/constants/Colors";

const ErrorList: React.FC<Props> = (props) => {
  return (
    <View style={styles.errorListStyle}>
      <MessageCircleX color={colors.danger} size={128} />
      <Text style={styles.errorListText}>Ha ocurrido un error</Text>
    </View>
  );
};

export default ErrorList;
