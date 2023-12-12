import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const PrimaryButton = ({ name, press }) => {
  return (
    <TouchableOpacity onPress={press}>
      <View style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    backgroundColor: "#edff00",
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
