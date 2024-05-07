import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { HeaderProps as Props } from "./Header.types";
import styles from "./Header.styles";

const Header: React.FC<Props> = (props) => {
  return (
    <SafeAreaView style={styles.headerStyle}>
      <Text style={styles.headerText}>BANCO</Text>
    </SafeAreaView>
  );
};

export default Header;
