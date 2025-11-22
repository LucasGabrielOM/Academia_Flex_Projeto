import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function Equipamento() {
  const router = useRouter();
  const [nivel, setNivel] = useState("");

  useEffect(() => {
    const carregarNivel = async () => {
      const n = await AsyncStorage.getItem("nivel");
      setNivel(n || "");
    };
    carregarNivel();
  }, []);

  const handleEscolherEquipamento = async (equipamento: string) => {
    await AsyncStorage.setItem("equipamento", equipamento);
    router.push("/treinos");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Escolha seu tipo de treino ⚙️</Text>

        <Text style={styles.subtitle}>
          Nível selecionado: <Text style={styles.bold}>{nivel}</Text>
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherEquipamento("Braços")}
        >
          <Text style={styles.cardTitle}>💪 Treino de Braços</Text>
          <Text style={styles.cardText}>Foco em bíceps, tríceps e antebraço</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherEquipamento("Costas")}
        >
          <Text style={styles.cardTitle}>🏋️ Treino de Costas</Text>
          <Text style={styles.cardText}>
            Puxadas e remadas para fortalecer o dorso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherEquipamento("Pernas")}
        >
          <Text style={styles.cardTitle}>🦵 Treino de Pernas</Text>
          <Text style={styles.cardText}>
            Agachamento, leg press e extensão
          </Text>
        </TouchableOpacity>

        <Link href="/treinos/nivel" asChild>
          <TouchableOpacity>
            <Text style={styles.voltar}>← Voltar para Nível</Text>
          </TouchableOpacity>
        </Link>

        <View style={{ height: 50 }} /> 
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 80, // espaço para tabs
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    color: "#00C6A2",
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "#00C6A2",
  },
  card: {
    backgroundColor: "#00C6A2",
    width: "90%",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  cardText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
    textAlign: "center",
  },
  voltar: {
    color: "#00C6A2",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },
});
