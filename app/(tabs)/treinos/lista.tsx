import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { exercisesByGroup } from "../../../constants/exerciseList";

type Params = {
  grupo?: string | string[];
  nivel?: string | string[];
};

export default function ListaExercicios() {
  const params = useLocalSearchParams<Params>();

  // Garante que vamos usar SEMPRE uma string (e não string[])
  let grupoKey = "peito";

  if (Array.isArray(params.grupo)) {
    if (params.grupo.length > 0) {
      grupoKey = params.grupo[0] as string;
    }
  } else if (params.grupo) {
    grupoKey = params.grupo as string;
  }

  const data = (exercisesByGroup as any)[grupoKey] || [];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Exercícios de {grupoKey.toUpperCase()}
      </Text>

      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }: any) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/treinos/detalhe/${item.id}`)}
          >
            <Image source={item.image} style={styles.image} />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>{item.nome}</Text>
              <Text style={styles.info}>
                {item.series} • {item.repeticoes}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#111",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  name: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  info: {
    color: "#ccc",
    fontSize: 14,
  },
});
