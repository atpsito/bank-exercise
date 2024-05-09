import React, { useEffect } from "react";
import { View } from "react-native";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from "dayjs";

import { ProductFormProps as Props } from "./ProductForm.types";
import styles from "./ProductForm.styles";
import TextInput from "../global/TextInput/TextInput";
import v from "@/validations/products.validator";
import Button from "../global/Button/Button";
import { Product } from "@/types/products.types";
import { verifyProduct } from "@/services/products/products.service";
import { useInsertProduct } from "@/services/products/products.service.hooks";
import { useUpdateProduct } from "@/services/products/products.service.hooks";
import { useRouter } from "expo-router";

const ProductForm: React.FC<Props> = (props) => {
  const { product } = props;
  const { date_release } = product ?? {};
  const { back } = useRouter();
  const { mutateAsync: insertProduct, isPending: isInsertPending } =
    useInsertProduct();
  const { mutateAsync: updateProduct, isPending: isUpdatePending } =
    useUpdateProduct();
  const { control, handleSubmit, watch, setValue, setError, reset } = useForm({
    mode: "all",
    resolver: zodResolver(v.base),
    defaultValues: product,
  });
  const watchReleaseDate = watch("date_release");

  useEffect(() => {
    const date = dayjs(watchReleaseDate, "DD/MM/YYYY");
    setValue(
      "date_revision",
      date.isValid()
        ? dayjs(watchReleaseDate, "DD/MM/YYYY")
            .add(1, "year")
            .format("DD/MM/YYYY")
        : date_release ?? ""
    );
  }, [watchReleaseDate]);

  const submitHandler = async (data: Product) => {
    const { id } = data;
    const idExists = await verifyProduct(id);
    if (idExists && !product) {
      setError("id", { type: "manual", message: "ID ya existe" });
      return;
    }

    const payload = {
      ...data,
      date_release: dayjs(data.date_release, "DD/MM/YYYY").format("YYYY-MM-DD"),
      date_revision: dayjs(data.date_revision, "DD/MM/YYYY").format(
        "YYYY-MM-DD"
      ),
    };

    if (product) {
      await updateProduct(payload);
    } else {
      await insertProduct(payload);
    }
    back();
  };

  return (
    <View style={styles.productFormStyle}>
      <View>
        <Controller
          name="id"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="ID"
                onBlur={onBlur}
                onChangeText={onChange}
                editable={!product}
                value={value}
                error={error?.message}
                placeholder="ID"
              />
            );
          }}
        />
        <Controller
          name="name"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="Nombre"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
                placeholder="Nombre"
              />
            );
          }}
        />
        <Controller
          name="description"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="Descripción"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
                placeholder="Descripción"
              />
            );
          }}
        />
        <Controller
          name="logo"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="Logo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
                placeholder="Logo"
              />
            );
          }}
        />
        <Controller
          name="date_release"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="Fecha Liberación"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
                placeholder="Fecha Liberación"
              />
            );
          }}
        />
        <Controller
          name="date_revision"
          control={control}
          render={(fieldProps) => {
            const { field, fieldState } = fieldProps;
            const { onBlur, onChange, value } = field;
            const { error } = fieldState;
            return (
              <TextInput
                label="Fecha Revisión"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={error?.message}
                editable={false}
                placeholder="Fecha Revisión"
              />
            );
          }}
        />
      </View>
      <View style={styles.actions}>
        <Button
          buttonType="PRIMARY"
          onPress={handleSubmit(submitHandler)}
          disabled={isInsertPending ?? isUpdatePending}
        >
          Enviar
        </Button>
        <Button onPress={() => reset()}>Reiniciar</Button>
      </View>
    </View>
  );
};

export default ProductForm;
