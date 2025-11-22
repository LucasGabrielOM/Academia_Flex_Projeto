import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Costas() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Treino de Costas</Text>

      <View style={styles.card}>
        <Text style={styles.exercise}>Puxada na Barra Fixa</Text>
        <Text style={styles.series}>4 séries — 8 a 12 rep</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.exercise}>Remada Curvada</Text>
        <Text style={styles.series}>4 séries — 8 a 10 rep</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.exercise}>Remada Baixa</Text>
        <Text style={styles.series}>3 séries — 10 a 12 rep</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.exercise}>Serrote</Text>
        <Text style={styles.series}>3 séries — 10 rep</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#111",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#b40000",
  },
  exercise: { color: "#fff", fontSize: 18, fontWeight: "600" },
  series: { color: "#bbb", marginTop: 4 },
});
