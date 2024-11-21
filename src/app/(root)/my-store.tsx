import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function MyStore() {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>Minha loja</StyledText>
          </View>
        }
      >
        <View>
          <View style={styles.content}>
            <ContentDrawer>
              <View style={styles.counter}>
                <StyledText style={{ fontSize: 20 }}>Falhas</StyledText>

                <StyledText
                  style={{ fontSize: 28, marginTop: 10, color: "#d65036" }}
                >
                  28
                </StyledText>
              </View>
            </ContentDrawer>

            <ContentDrawer>
              <StyledText>Lista de falhas por aerogerador</StyledText>
            </ContentDrawer>
          </View>
        </View>
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

  counter: {
    display: "flex",
    flexDirection: "column",
  },
});
