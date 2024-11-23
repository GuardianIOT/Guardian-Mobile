import React from "react";
import {
  Alert,
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Colors from "@/src/constants/Colors";

const Aerogenerator = ({ route, navigation }) => {
  const aerogenerator = route?.params?.aerogenerator || {
    modelo: "GE 2.3 MW 116",
    tecnologia: "Gerador Síncrono",
    capacidadeMW: 2.3,
    alturaMastro: 116,
    velocidadeCorte: 3.5,
    statusOperacao: "Operacional",
    diametroMotor: 116,
    dataInstalacao: "2020-05-15",
    garantia: "5 anos",
    parqueId: 101,
  };

  const handleDelete = () => {
    // Exibir um alerta de confirmação antes de excluir
    Alert.alert(
      "Confirmação",
      "Tem certeza que deseja excluir este aerogerador?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: async () => {
            try {
              // Substitua esta lógica pela chamada à API ou lógica de exclusão
              console.log(`Aerogerador ${aerogenerator.modelo} excluído`);
              Alert.alert("Sucesso", "O aerogerador foi excluído com sucesso.");
              navigation.goBack(); // Voltar à tela anterior
            } catch (error) {
              console.error(error);
              Alert.alert("Erro", "Não foi possível excluir o aerogerador.");
            }
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{aerogenerator.modelo}</Text>
        <Text style={styles.subtitle}>
          Status: {aerogenerator.statusOperacao}
        </Text>
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.sectionTitle}>Detalhes do Aerogerador</Text>
        <DetailItem label="Tecnologia" value={aerogenerator.tecnologia} />
        <DetailItem
          label="Capacidade (MW)"
          value={`${aerogenerator.capacidadeMW} MW`}
        />
        <DetailItem
          label="Altura do Mastro (m)"
          value={`${aerogenerator.alturaMastro} m`}
        />
        <DetailItem
          label="Diâmetro do Motor (m)"
          value={`${aerogenerator.diametroMotor} m`}
        />
        <DetailItem
          label="Velocidade de Corte (m/s)"
          value={`${aerogenerator.velocidadeCorte} m/s`}
        />
        <DetailItem
          label="Data de Instalação"
          value={formatDate(aerogenerator.dataInstalacao)}
        />
        <DetailItem label="Garantia" value={aerogenerator.garantia} />
        <DetailItem label="Parque ID" value={`#${aerogenerator.parqueId}`} />
      </View>

      <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
        <Text style={styles.deleteButtonText}>Excluir Aerogerador</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const DetailItem = ({ label, value }: { label: string; value: string }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}:</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const formatDate = (dateString: string) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("pt-BR", options);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.rootBackground,
  },
  header: {
    padding: 20,
    backgroundColor: Colors.primary,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 16,
    color: "#fafafa",
    marginTop: 5,
  },
  detailsContainer: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 15,
  },
  detailItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#c2c2c2",
  },
  detailLabel: {
    fontSize: 16,
    color: "black",
  },
  detailValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  deleteButton: {
    margin: 20,
    padding: 15,
    backgroundColor: "red",
    borderRadius: 10,
    alignItems: "center",
  },
  deleteButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Aerogenerator;
