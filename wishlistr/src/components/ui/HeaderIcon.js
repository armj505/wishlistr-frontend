import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const HeaderIcon = ({ icon, press }) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={press}>
      <Ionicons name={icon} size={32} color="#edff00" />
    </TouchableOpacity>
  );
};

export default HeaderIcon;

const styles = StyleSheet.create({
  icon: {
    width: 32,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
  },
});
