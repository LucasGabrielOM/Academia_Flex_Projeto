import { View, Text, Image, StyleSheet } from "react-native";
import { colors } from "../../theme/colors";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/logocorreta1.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Bem vindo à Academia Flex</Text>
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
    width: 400,
    height: 400,
  },

  title: {
    fontSize: 27,
    fontWeight: "bold",
    color: colors.red,
    marginTop: 10,
  },

  subtitle: {
    fontSize: 18,
    marginTop: 4,
    color: colors.blueDark,
  },
});
