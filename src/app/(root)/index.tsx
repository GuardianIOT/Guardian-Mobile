import NoProductsFound from "@/src/components/cases/products/NoProductsFound";
import RowAerogenerator from "@/src/components/cases/products/RowAerogenerator";
import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { IAerogenerator } from "@/src/types/Aerogenerator";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeRoot() {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>
              Olá, Bruno{user?.nome.split(" ")[0]}
            </StyledText>
          </View>
        }
      >
        <View>
          {/* Last Trendings */}
          <View style={styles.content}>
            <ContentDrawer title="Gerenciar aerogeradores">
              <AeroGeneratorsList />
            </ContentDrawer>

            <ContentDrawer
              title="Mapa dos aerogeradores"
              extraAction={() => {}}
            ></ContentDrawer>
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
});

export function AeroGeneratorsList() {
  const mockProducts: IAerogenerator[] = [
    {
      id: 1,
      label: "GE 2.3 MW 116",
      location: "São Paulo, SP",
    },
    {
      id: 2,
      label: "GE 2.3 MW 117",
      location: "São Paulo, SP",
    },
    {
      id: 3,
      label: "GE 2.3 MW 118",
      location: "São Paulo, SP",
    },
  ];

  const [aerogenerators, setAerogenerators] =
    useState<IAerogenerator[]>(mockProducts);

  return (
    <View style={{ display: "flex", gap: 20 }}>
      {aerogenerators.length === 0 ? (
        <NoProductsFound />
      ) : (
        aerogenerators.map((aerogenerator) => (
          <RowAerogenerator
            key={aerogenerator.id}
            aerogenerator={aerogenerator}
          />
        ))
      )}
    </View>
  );
}
