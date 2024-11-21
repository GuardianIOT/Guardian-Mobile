import BottomDrawer from "@/src/components/layout/BottomDrawer";
import Button from "@/src/components/shared/Button";
import { useNavigation } from "expo-router";
import { ImageBackground, StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function AuthRoot() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/auth-bg.jpg")}
        resizeMode="cover"
      >
        <BottomDrawer
          title="Entrar ou criar conta."
          description="Defendendo o vento que move o mundo."
          content={
            <View style={styles.actions}>
              <Button
                onPress={() => navigation.navigate("login")}
                label="Já tenho uma conta"
              />
              <Button
                variant="outline"
                onPress={() => navigation.navigate("register")}
                label="Ainda não tenho uma conta"
              />
            </View>
          }
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },

  actions: { display: "flex", flexDirection: "column", gap: 10 },
});
