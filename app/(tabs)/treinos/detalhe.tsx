import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function TreinoDetalhe() {
  const { id, nome } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{nome}</Text>

      <View style={styles.imgBox}>
        <Text style={styles.imgText}>Nenhuma imagem disponível</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 24,
    marginBottom: 20,
  },
  imgBox: {
    width: "100%",
    height: 300,
    backgroundColor: "#111",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  imgText: {
    color: "#888",
    fontSize: 16,
  },
});
 