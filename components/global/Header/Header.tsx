import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

import { HeaderProps as Props } from "./Header.types";
import styles from "./Header.styles";
import colors from "@/constants/Colors";

const Header: React.FC<Props> = (props) => {
  const { canGoBack } = props;
  const { back } = useRouter();

  return (
    <SafeAreaView style={styles.headerStyle} edges={["top"]}>
      {canGoBack ? (
        <TouchableOpacity onPress={back}>
          <ArrowLeft color={colors.secondary} />
        </TouchableOpacity>
      ) : null}
      <Text style={styles.headerText}>BANCO</Text>
    </SafeAreaView>
  );
};

export default Header;
