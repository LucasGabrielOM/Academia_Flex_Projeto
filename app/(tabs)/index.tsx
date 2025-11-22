import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem-vindo à Academia Flex</Text>
      <Text style={styles.subtitle}>Seu treino começa aqui 💪</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  logo: {
    width: 260,
    height: 260,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: colors.red,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 16,
    marginTop: 4,
    color: colors.blueDark,
  },
});
