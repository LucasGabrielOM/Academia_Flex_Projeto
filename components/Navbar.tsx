// components/Navbar.tsx
import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

function Navbar() {
  var router = useRouter();
  return (
    <View style={styles.navbar}>
      <Pressable style={styles.navItem} onPress={function(){ router.push("/login"); }}>
        <Text style={styles.navText}>🏠 Home</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={function(){ router.push("/treinos"); }}>
        <Text style={styles.navText}>🏋️ Treinos</Text>
      </Pressable>
      <Pressable style={styles.navItem} onPress={function(){ router.push("/config"); }}>
        <Text style={styles.navText}>🔗 Config</Text>
      </Pressable>
    </View>
  );
}

var styles = StyleSheet.create({
  navbar: {
    position: "absolute", left: 0, right: 0, bottom: 0,
    flexDirection: "row", justifyContent: "space-around",
    backgroundColor: "#111", borderTopWidth: 1, borderTopColor: "#222",
    paddingVertical: 10, paddingHorizontal: 12,
  },
  navItem: { paddingVertical: 8, paddingHorizontal: 10 },
  navText: { color: "#ff2a2a", fontWeight: "bold" },
});

export default Navbar;
