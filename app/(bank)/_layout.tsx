import React from "react";
import { Stack } from "expo-router";

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
      <Stack.Screen
        name="[productId]/delete"
        options={{
          presentation: "transparentModal",
          contentStyle: { backgroundColor: "#40404040" },
          gestureEnabled: true,
          headerShown: false,
        }}
      />
      <Stack.Screen name="create" />
    </Stack>
  );
}
