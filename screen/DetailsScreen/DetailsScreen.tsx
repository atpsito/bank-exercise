import React, { useMemo } from "react";
import { Text, View, Image } from "react-native";

import { DetailsScreenProps as Props } from "./DetailsScreen.types";
import styles from "./DetailsScreen.styles";
import Button from "@/components/global/Button/Button";
import { Link, useLocalSearchParams } from "expo-router";
import { useFetchProducts } from "@/services/products/products.service.hooks";
import dayjs from "dayjs";

const DetailsScreen: React.FC<Props> = (props) => {
  const { productId } = useLocalSearchParams();
  const { data } = useFetchProducts();
  const product = useMemo(
    () => data?.find((product) => product.id === productId),
    [data, productId]
  );
  const { id, name, logo, date_revision } = product ?? {};
  const { date_release, description } = product ?? {};

  return (
    <View style={styles.detailsScreenStyle}>
      <View>
        <Text style={styles.title}>ID: {id}</Text>
        <Text style={styles.subtitle}>Información extra</Text>
      </View>
      <View style={styles.info}>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Nombre</Text>
          <Text style={styles.itemValue}>{name}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Descripción</Text>
          <Text style={styles.itemValue}>{description}</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Logo</Text>
          <Image
            style={styles.image}
            source={{ uri: logo }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Fecha de liberación</Text>
          <Text style={styles.itemValue}>
            {dayjs(date_release).utc().format("DD/MM/YYYY")}
          </Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.itemTitle}>Fecha revisión</Text>
          <Text style={styles.itemValue}>
            {dayjs(date_revision).utc().format("DD/MM/YYYY")}
          </Text>
        </View>
      </View>
      <View style={styles.actions}>
        <Link href={`/(bank)/${productId}/edit`} asChild>
          <Button>Editar</Button>
        </Link>
        <Link href={`/(bank)/${productId}/delete`} asChild>
          <Button buttonType="DANGER">Eliminar</Button>
        </Link>
      </View>
    </View>
  );
};

export default DetailsScreen;
