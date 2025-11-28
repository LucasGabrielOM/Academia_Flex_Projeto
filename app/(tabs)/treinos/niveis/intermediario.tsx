import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";

export default function IntermediarioPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos Intermediários</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/treinos/grupos?nivel=intermediario")}
      >
        <Text style={styles.buttonText}>Escolher grupos musculares</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  title: { color: "#fff", fontSize: 28, marginBottom: 20 },
  button: { backgroundColor: "#ff9933", padding: 14, borderRadius: 10 },
  buttonText: { color: "#000", fontSize: 16, fontWeight: "bold" },
});
