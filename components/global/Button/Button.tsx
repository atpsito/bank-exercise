import React, { forwardRef, useMemo } from "react";
import { Text, TouchableOpacity } from "react-native";

import { ButtonProps as Props } from "./Button.types";
import styles from "./Button.styles";

const Button = forwardRef<TouchableOpacity, Props>((props, ref) => {
  const { children, buttonType = "INFO" } = props;
  const buttonStyle = useMemo(() => {
    switch (buttonType) {
      case "PRIMARY":
        return styles.buttonPrimary;
      case "INFO":
        return styles.buttonInfo;
      case "DANGER":
        return styles.buttonDanger;
      default:
        return styles.buttonInfo;
    }
  }, [buttonType]);

  const textStyle = useMemo(() => {
    switch (buttonType) {
      case "PRIMARY":
        return styles.textPrimary;
      case "INFO":
        return styles.textInfo;
      case "DANGER":
        return styles.textDanger;
      default:
        return styles.textInfo;
    }
  }, [buttonType]);

  return (
    <TouchableOpacity {...props} style={[styles.button, buttonStyle]} ref={ref}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
});

export default Button;
