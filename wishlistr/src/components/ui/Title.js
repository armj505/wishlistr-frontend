import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";

const Title = ({ title, align }) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.container, { alignItems: align }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: "auto",
    width: "100%",
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "white",
    filter,
  },
});
