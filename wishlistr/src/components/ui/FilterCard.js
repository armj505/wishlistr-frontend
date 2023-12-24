import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";
import ROUTES from "../../navigations";

const FilterCard = ({ category, image, routeName, param }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName, param)}>
      <View style={styles.container}>
        <Image />
        <Text style={styles.text}>{category.name}</Text>
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
