import { View, Text, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { colors } from "../../../theme/colors";

export default function ConfigPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Configurações</Text>

      <Text style={styles.section}>Academia Flex – Unidade</Text>
      <Text style={styles.text}>
        Rua Waldemar Ouriques, 535{"\n"}Capoeiras – Florianópolis/SC
      </Text>

      <TouchableOpacity
        style={styles.buttonPrimary}
        onPress={() => Linking.openURL("https://www.instagram.com/acadflex/")}
      >
        <Text style={styles.buttonPrimaryText}>Instagram</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonOutline}
        onPress={() => Linking.openURL("https://wa.me/5548999691808")}
      >
        <Text style={styles.buttonOutlineText}>WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.red,
    marginBottom: 30,
  },

  section: {
    fontSize: 18,
    color: colors.blueDark,
    marginBottom: 6,
  },

  text: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 20,
  },

  buttonPrimary: {
    backgroundColor: colors.red,
    padding: 14,
    borderRadius: 10,
    marginBottom: 12,
  },

  buttonPrimaryText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonOutline: {
    borderColor: colors.blueDark,
    borderWidth: 2,
    padding: 14,
    borderRadius: 10,
  },

  buttonOutlineText: {
    color: colors.blueDark,
    textAlign: "center",
    fontWeight: "bold",
  },
});
