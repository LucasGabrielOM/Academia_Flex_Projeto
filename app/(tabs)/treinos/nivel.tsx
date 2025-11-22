import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, useRouter } from "expo-router";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Nivel() {
  const router = useRouter();

  const handleEscolherNivel = async (nivel: string) => {
    await AsyncStorage.setItem("nivel", nivel);
    router.push("/treinos/equipamento");
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Escolha seu nível 💪</Text>
        <Text style={styles.subtitle}>
          Selecione o nível de dificuldade do treino
        </Text>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherNivel("Iniciante")}
        >
          <Text style={styles.cardTitle}>🏋️ Iniciante</Text>
          <Text style={styles.cardText}>Ideal para quem está começando agora</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherNivel("Intermediário")}
        >
          <Text style={styles.cardTitle}>🔥 Intermediário</Text>
          <Text style={styles.cardText}>Para quem já treina com frequência</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => handleEscolherNivel("Avançado")}
        >
          <Text style={styles.cardTitle}>⚡ Avançado</Text>
          <Text style={styles.cardText}>Desafie seus limites!</Text>
        </TouchableOpacity>

        <Link href="/treinos" asChild>
          <TouchableOpacity>
            <Text style={styles.voltar}>← Voltar para Treinos</Text>
          </TouchableOpacity>
        </Link>

        {/* espaço extra para não colar no rodapé */}
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
    paddingBottom: 80, // espaço para evitar corte no rodapé
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
    paddingHorizontal: 20,
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
