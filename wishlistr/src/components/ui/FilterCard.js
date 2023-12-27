import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";
import ROUTES from "../../navigations";
import { LinearGradient } from "expo-linear-gradient";

const FilterCard = ({ category, text, routeName, param }) => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName, param)}>
      <View style={[styles.container, {}]}>
        <Image source={{ uri: category.image }} style={styles.image} />
        <LinearGradient
          colors={[`${colors.gradient}`, "#8a8b8a33", "#00000011"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.2 }}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 9,
            position: "absolute",
            // opacity: 1,
          }}
        />
        {text ? (
          <Text numberOfLines={1} style={styles.text}>
            {category.name}
          </Text>
        ) : (
          <></>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FilterCard;

const styles = StyleSheet.create({
  container: {
    width: 96,
    height: 96,
    backgroundColor: "#eee",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  text: {
    fontSize: 12,
    fontWeight: "600",
    position: "absolute",
    bottom: 4,
    zIndex: 999,
    color: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
