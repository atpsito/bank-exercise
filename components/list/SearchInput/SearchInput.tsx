import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

import { SearchInputProps as Props } from "./SearchInput.types";
import styles from "./SearchInput.styles";

const SearchInput: React.FC<Props> = (props) => {
  const [value, setValue] = useState("");

  const onChangeText = (text: string) => {
    setValue(text);
    props.onChangeText(text);
  };

  return (
    <TextInput
      style={styles.searchInputStyle}
      placeholder="Search"
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default SearchInput;
