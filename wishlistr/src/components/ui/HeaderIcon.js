import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const HeaderIcon = ({ icon, press }) => {
  return (
    <TouchableOpacity>
      <Ionicons color="#edff00" name={icon} onPress={press} />
    </TouchableOpacity>
  );
};

export default HeaderIcon;

const styles = StyleSheet.create({});
