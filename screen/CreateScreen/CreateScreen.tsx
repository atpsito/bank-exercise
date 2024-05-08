import React from "react";
import { Text, View } from "react-native";

import { CreateScreenProps as Props } from "./CreateScreen.types";
import styles from "./CreateScreen.styles";

const CreateScreen: React.FC<Props> = (props) => {
  return (
    <View style={styles.createScreenStyle}>
      <Text>Create</Text>
    </View>
  );
};

export default CreateScreen;
