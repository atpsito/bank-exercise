import React, { useMemo } from "react";
import { ScrollView, Text } from "react-native";

import { EditScreenProps as Props } from "./EditScreen.types";
import styles from "./EditScreen.styles";
import ProductForm from "@/components/ProductForm/ProductForm";
import { useLocalSearchParams } from "expo-router";
import { useFetchProducts } from "@/services/products/products.service.hooks";
import dayjs from "dayjs";

const EditScreen: React.FC<Props> = (props) => {
  const { productId } = useLocalSearchParams();
  const { data } = useFetchProducts();
  const product = useMemo(() => {
    const findProduct = data?.find((product) => product.id === productId);
    if (!findProduct) return;
    const { date_release, date_revision } = findProduct;
    return {
      ...findProduct,
      date_release: dayjs(date_release).utc().format("DD/MM/YYYY"),
      date_revision: dayjs(date_revision).utc().format("DD/MM/YYYY"),
    };
  }, [data, productId]);

  return (
    <ScrollView style={styles.editScreenStyle}>
      <Text style={styles.title}>Formulario de Registro</Text>
      <ProductForm product={product} />
    </ScrollView>
  );
};

export default EditScreen;
