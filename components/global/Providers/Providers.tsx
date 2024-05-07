import React from "react";
import { Text, View } from "react-native";

import { ProvidersProps as Props } from "./Providers.types";
import styles from "./Providers.styles";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/config/queryClient";

const Providers: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default Providers;
