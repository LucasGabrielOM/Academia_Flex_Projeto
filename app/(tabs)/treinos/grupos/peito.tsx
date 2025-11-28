import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { exercisesByGroup } from "../../../../constants/exerciseList";

export default function PeitoPage() {
  const lista = exercisesByGroup.peito;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos de Peito</Text>

      {lista.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.card}
          onPress={() => router.push(`/treinos/${item.id}`)}
        >
          <Text style={styles.text}>{item.nome}</Text>
        </TouchableOpacity>
      ))}
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
