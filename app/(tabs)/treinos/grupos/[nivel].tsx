import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function GruposPage() {
  const { nivel } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos Musculares ({nivel})</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push(`/treinos/lista?grupo=peito`)}>
        <Text style={styles.buttonText}>Peito</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push(`/treinos/lista?grupo=costas`)}>
        <Text style={styles.buttonText}>Costas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push(`/treinos/lista?grupo=pernas`)}>
        <Text style={styles.buttonText}>Pernas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push(`/treinos/lista?grupo=ombro`)}>
        <Text style={styles.buttonText}>Ombro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => router.push(`/treinos/lista?grupo=bracos`)}>
        <Text style={styles.buttonText}>Braços</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 26, marginBottom: 25 },
  button: { backgroundColor: "#222", padding: 15, borderRadius: 10, marginBottom: 15 },
  buttonText: { color: "#fff", fontSize: 18 },
});
