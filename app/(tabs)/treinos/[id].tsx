import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { exercisesByGroup } from "../../../constants/exerciseList";

export default function ExerciseDetail() {
  const { id } = useLocalSearchParams();

  // Procurar o exercício em TODOS os grupos
  const exercise =
    exercisesByGroup.peito.find((e) => e.id === id) ||
    exercisesByGroup.costas.find((e) => e.id === id) ||
    exercisesByGroup.pernas.find((e) => e.id === id) ||
    exercisesByGroup.bracos.find((e) => e.id === id);

  if (!exercise) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff" }}>Exercício não encontrado.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.nome}</Text>

      <Image source={exercise.image} style={styles.img} />

      <Text style={styles.info}>Séries: {exercise.series}</Text>
      <Text style={styles.info}>Repetições: {exercise.repeticoes}</Text>

      <Text style={styles.desc}>{exercise.descricao}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  img: { width: "100%", height: 260, borderRadius: 12, marginBottom: 20 },
  info: { color: "#ff4444", fontSize: 18, marginBottom: 10 },
  desc: { color: "#ccc", fontSize: 16, marginTop: 20 },
});
