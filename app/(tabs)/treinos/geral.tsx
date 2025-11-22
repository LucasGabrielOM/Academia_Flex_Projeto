import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { db } from "../../../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function TreinosGerais() {
  const [exercises, setExercises] = useState<any[]>([]);

  async function carregarExercicios() {
    const ref = collection(db, "exercises");
    const snap = await getDocs(ref);

    const lista = snap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setExercises(lista);
  }

  useEffect(() => {
    carregarExercicios();
  }, []);

  function abrir(exercicioId: string) {
    router.push(`/treinos/detalhe?id=${exercicioId}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos Gerais</Text>

      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => abrir(item.id)}
          >
            <Text style={styles.text}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#111", padding: 20 },
  title: { color: "#fff", fontSize: 24, marginBottom: 15, fontWeight: "bold" },
  card: {
    backgroundColor: "#222",
    padding: 18,
    borderRadius: 12,
    marginBottom: 12,
  },
  text: { color: "#fff", fontSize: 18 },
});
