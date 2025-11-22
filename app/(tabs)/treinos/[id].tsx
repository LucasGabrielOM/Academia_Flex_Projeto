import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { getAllExercises } from "../../../firebase/firestore";

export default function ExerciseDetail() {
  const { id } = useLocalSearchParams();
  const [exercise, setExercise] = useState<any>(null);

  useEffect(() => {
    async function load() {
      const all = await getAllExercises();
      const found = all.find((item: any) => item.id === id);
      setExercise(found);
    }
    load();
  }, []);

  if (!exercise) {
    return (
      <View style={styles.center}>
        <Text style={{ color: "#fff" }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>

      <Text style={styles.subtitle}>ID: {id}</Text>

      <Text style={styles.text}>
        Aqui você pode colocar descrição, séries, repetições ou vídeo do exercício.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#000" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { color: "#fff", fontSize: 28, fontWeight: "bold", marginBottom: 10 },
  subtitle: { color: "#ccc", fontSize: 16, marginBottom: 20 },
  text: { color: "#ddd", fontSize: 16, lineHeight: 22 },
});
