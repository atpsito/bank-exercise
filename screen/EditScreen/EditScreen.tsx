import React from "react";
import { Text, View } from "react-native";

import { EditScreenProps as Props } from "./EditScreen.types";
import styles from "./EditScreen.styles";

const EditScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.editScreenStyle}>
      <Text style={styles.editScreenText}>BANCO</Text>
    </View>
  );
};

export default EditScreen;
