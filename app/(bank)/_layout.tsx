import React from "react";
import { Stack } from "expo-router";

import { useColorScheme } from "@/components/useColorScheme";
import Header from "@/components/global/Header/Header";

export default function MainStackLayout() {
  return (
    <Stack
      screenOptions={{
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="[productId]/details" />
      <Stack.Screen name="[productId]/edit" />
      <Stack.Screen name="create" />
    </Stack>
  );
}
