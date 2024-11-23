import ContentWrapper from "@/src/components/layout/ContentWrapper";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function Map() {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>Mapa</StyledText>
          </View>
        }
      >
        <View style={styles.content}></View>
      </ContentWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerName: {
    fontSize: 24,

    color: "white",
  },

  content: {
    display: "flex",
    gap: 20,
  },
});
