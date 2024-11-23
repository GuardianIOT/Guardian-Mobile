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
            <StyledText style={styles.headerName}>Métricas</StyledText>
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

              <BarChart
                data={{
                  labels: ["Jul.", "Ago.", "Set.", "Out."],
                  datasets: [
                    {
                      data: [
                        // Dados do aerogerador A
                        2, // Julho
                        4, // Agosto
                        8, // Setembro
                        6, // Outubro

                        // Dados do aerogerador B
                        1, // Julho
                        3, // Agosto
                        5, // Setembro
                        2, // Outubro

                        // Dados do aerogerador C
                        6, // Julho
                        7, // Agosto
                        9, // Setembro
                        10, // Outubro

                        // Dados do aerogerador D
                        0, // Julho
                        2, // Agosto
                        3, // Setembro
                        4, // Outubro
                      ],
                    },
                  ],
                }}
                width={330}
                height={320}
                yAxisLabel=""
                yAxisSuffix=""
                yAxisInterval={1}
                chartConfig={{
                  backgroundColor: "#FFFF",
                  backgroundGradientFrom: "#FFFF",
                  backgroundGradientTo: "#FFFF",
                  decimalPlaces: 0,
                  color: (opacity = 1) => `rgba(214, 80, 54, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                  style: {
                    borderRadius: 16,
                  },
                  propsForDots: {
                    r: "6",
                    strokeWidth: "2",
                    stroke: "#d65036",
                  },
                }}
                style={{
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
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
