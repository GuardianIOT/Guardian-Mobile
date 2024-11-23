import Colors from "@/src/constants/Colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { Stack, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function AerogeneratorLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Visualizar aerogerador",
          headerStyle: {
            backgroundColor: Colors.accent,
          },
          headerTintColor: "#fff",
        }}
      />

      <Stack.Screen
        name="create-aerogenerator"
        options={{
          headerShown: true,
          title: "Criar aerogerador",
          headerStyle: {
            backgroundColor: Colors.accent,
          },
          headerTintColor: "#fff",
        }}
      />
    </Stack>
  );
}
