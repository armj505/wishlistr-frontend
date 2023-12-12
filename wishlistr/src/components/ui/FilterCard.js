import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const FilterCard = ({ title, image }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Image />
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FilterCard;

const styles = StyleSheet.create({
  container: {
    width: 96,
    height: 48,
    backgroundColor: "#eee",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
