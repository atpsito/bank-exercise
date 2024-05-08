import React, { forwardRef } from "react";
import { Text, View, TextInput as RNTextInput } from "react-native";

import { TextInputProps as Props } from "./TextInput.types";
import styles from "./TextInput.styles";

const TextInput = forwardRef<RNTextInput, Props>((props, ref) => {
  const { label, style, error = "", ...restProps } = props;
  const { editable } = restProps;
  const disabledStyle = editable === false ? styles.disabled : null;

  return (
    <View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <RNTextInput
        {...restProps}
        style={[styles.input, style, disabledStyle]}
      />
      <Text style={styles.error}>{error}</Text>
    </View>
  );
});

export default TextInput;
