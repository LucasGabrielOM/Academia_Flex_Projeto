import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../app/theme/colors";

export default function HeaderHome() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../app/assets/logo.png")} // coloca uma foto qualquer com esse nome
        style={styles.avatar}
      />

      <View>
        <Image
          source={require("../app/assets/logo.png")} // logo da Academia Flex
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.text}>Olá, Usuário!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    paddingHorizontal: 20,
    paddingTop: 35,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 30,
  },
  logo: {
    width: 130,
    height: 40,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 15,
  },
});
