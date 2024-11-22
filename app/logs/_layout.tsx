import React from "react";
import { Stack} from "expo-router";

const HomeScreen = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(top-tabs)" options={{ title: "Top Tabs" }} />
      <Stack.Screen
        name="ModalWithRefreshControl"
        options={{ presentation: "modal" }}
      />
      <Stack.Screen
        name="ModalWithoutRefreshControl"
        options={{ presentation: "modal" }}
      />
    </Stack>
  );
};

export default HomeScreen;
