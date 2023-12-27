import { StyleSheet, Text, Touchable, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useTheme } from "@react-navigation/native";

const PrimaryButton = ({ name, press }) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity onPress={press}>
      <View
        style={{
          backgroundColor: colors.primary,
          width: "100%",
          height: "auto",
          padding: 16,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
