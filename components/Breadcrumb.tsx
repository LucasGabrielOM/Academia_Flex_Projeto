// components/Breadcrumb.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Breadcrumb(props: { trail: string[] }) {
  var trilha = props.trail || ["Home"];
  return (
    <View style={styles.breadcrumb}>
      <Text style={styles.breadcrumbText}>{trilha.join(" > ")}</Text>
    </View>
  );
}

var styles = StyleSheet.create({
  breadcrumb: { paddingVertical: 6, marginBottom: 10 },
  breadcrumbText: { color: "#aaa", fontSize: 13 },
});

export default Breadcrumb;
