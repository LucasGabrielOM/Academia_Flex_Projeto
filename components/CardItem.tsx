import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../app/theme/colors";

type Props = {
  title: string;
  subtitle?: string;
  iconName: keyof typeof Ionicons.glyphMap;
};

export default function CardItem({ title, subtitle, iconName }: Props) {
  return (
    <View style={styles.card}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>

      <Ionicons name={iconName} size={28} color={colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 18,
    borderColor: colors.border,
    borderWidth: 1,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "600",
  },
  subtitle: {
    color: colors.textSecondary,
    marginTop: 4,
  },
});
