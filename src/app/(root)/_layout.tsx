import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { Stack, Tabs } from "expo-router";
import React from "react";

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name="product" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 60,
          margin: 10,
          borderRadius: 20,
          borderTopWidth: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Página principal",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="metrics"
        options={{
          headerShown: false,
          tabBarLabel: "Métricas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
