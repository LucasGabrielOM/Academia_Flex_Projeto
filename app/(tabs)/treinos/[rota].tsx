import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function TreinoRota() {
  const { rota } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treino escolhido:</Text>
      <Text style={styles.treino}>{rota}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, color: "#fff" },
  treino: { fontSize: 40, color: "red", fontWeight: "bold" },
});
