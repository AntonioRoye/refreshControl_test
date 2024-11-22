import "react-native-gesture-handler";
import "react-native-reanimated";
import React from "react";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          drawerStyle: {
            backgroundColor: "#404040",
          },
          drawerLabelStyle: {
            color: "white",
          },
        }}
      >
        <Drawer.Screen
          name="logs"
          options={{
            drawerLabel: "Logs",
            title: "Logs",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
