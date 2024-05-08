import React from "react";
import { View, Text } from "react-native";
import { TrafficCone } from "lucide-react-native";

import { EmptyListProps as Props } from "./EmptyList.types";
import styles from "./EmptyList.styles";
import colors from "@/constants/Colors";

const EmptyList: React.FC<Props> = (props) => {
  return (
    <View style={styles.emptyListStyle}>
      <TrafficCone color={colors.grey} size={128} />
      <Text style={styles.emptyListText}>No hay elementos para mostrar</Text>
    </View>
  );
};

export default EmptyList;
