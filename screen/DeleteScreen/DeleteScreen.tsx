import React, { useMemo } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { X } from "lucide-react-native";

import { DeleteScreenProps as Props } from "./DeleteScreen.types";
import styles from "./DeleteScreen.styles";
import colors from "@/constants/Colors";
import Button from "@/components/global/Button/Button";
import { useDeleteProduct } from "@/services/products/products.service.hooks";
import { useFetchProducts } from "@/services/products/products.service.hooks";

const DeleteScreen: React.FC<Props> = (props) => {
  const { productId } = useLocalSearchParams();
  const { replace, back } = useRouter();
  const { data } = useFetchProducts();
  const { mutateAsync: deleteProduct } = useDeleteProduct();
  const product = useMemo(
    () => data?.find((product) => product.id === productId),
    [data, productId]
  );
  const { name } = product ?? {};

  const deleteProductHandler = () => {
    if (!productId) return;
    deleteProduct(productId as string);
    replace("/(bank)");
  };

  return (
    <View style={styles.deleteScreenStyle}>
      <View style={styles.modalContainer}>
        <TouchableOpacity onPress={back} style={styles.modalClose}>
          <X color={colors.grey} />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.title}>
            ¿Estás seguro de eliminar el producto {name}?
          </Text>
        </View>
        <View style={styles.actions}>
          <Button buttonType="PRIMARY" onPress={deleteProductHandler}>
            Confirmar
          </Button>
          <Button onPress={back}>Cancelar</Button>
        </View>
      </View>
    </View>
  );
};

export default DeleteScreen;
