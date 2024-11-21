import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { StyledText } from "../../shared/StyledText";

import Colors from "@/src/constants/Colors";
import { IAerogenerator } from "@/src/types/Aerogenerator";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function RowAerogenerator({
  aerogenerator,
}: {
  aerogenerator: IAerogenerator;
}) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("aerogenerator", { id: aerogenerator.id })
      }
      style={styles.container}
    >
      {/* Image */}
      <View style={styles.iconSquare}>
        <FontAwesome name={"bolt"} color={Colors.primary} size={30} />
      </View>

      {/* aerogenerator Data */}
      <View style={styles.aerogeneratorData}>
        {/* Name */}
        <StyledText style={styles.aerogeneratorTitle}>
          {aerogenerator.label}
        </StyledText>

        <StyledText style={styles.aerogeneratorLocation}>
          {aerogenerator.location}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },

  iconSquare: {
    width: 50,
    height: 50,
    borderRadius: 8,
    backgroundColor: "#d6e9ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  aerogeneratorData: {
    display: "flex",
    gap: 4,
  },

  aerogeneratorTitle: {
    fontSize: 18,
    color: "#797979",
  },

  aerogeneratorLocation: {
    fontSize: 14,
    color: "#797979",
  },
});
