import React from "react";
import { Text, ScrollView } from "react-native";

import { CreateScreenProps as Props } from "./CreateScreen.types";
import styles from "./CreateScreen.styles";
import ProductForm from "@/components/ProductForm/ProductForm";

const CreateScreen: React.FC<Props> = (props) => {
  return (
    <ScrollView style={styles.createScreenStyle}>
      <Text style={styles.title}>Formulario de Registro</Text>
      <ProductForm />
    </ScrollView>
  );
};

export default CreateScreen;
