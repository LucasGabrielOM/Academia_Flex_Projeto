import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function TreinosHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o nível do treino</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/treinos/niveis/iniciante")}
      >
        <Text style={styles.buttonText}>Iniciante</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/treinos/niveis/intermediario")}
      >
        <Text style={styles.buttonText}>Intermediário</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/treinos/niveis/avancado")}
      >
        <Text style={styles.buttonText}>Avançado</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  title: { color: "#fff", fontSize: 26, marginBottom: 40 },
  button: { backgroundColor: "#ff3333", padding: 15, borderRadius: 10, marginBottom: 15, width: 200 },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center", fontWeight: "bold" },
});
