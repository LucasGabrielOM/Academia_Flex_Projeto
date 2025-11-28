import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function GruposPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecione o grupo muscular</Text>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/treinos/grupos/peito")}>
        <Text style={styles.text}>Peito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/treinos/grupos/costas")}>
        <Text style={styles.text}>Costas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/treinos/grupos/pernas")}>
        <Text style={styles.text}>Pernas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push("/treinos/grupos/bracos")}>
        <Text style={styles.text}>Braços</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#222",
    padding: 14,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: { color: "#fff", fontSize: 18 },
});
