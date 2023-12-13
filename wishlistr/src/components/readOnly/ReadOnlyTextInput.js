import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const ReadOnlyTextInput = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        style={styles.input}
        editable={false}
        pointerEvents="none"
        mode="outlined"
      />
    </View>
  );
};

export default ReadOnlyTextInput;

const styles = StyleSheet.create({
  container: { width: "90%" },
  label: {
    fontSize: 13,
  },
  input: {
    backgroundColor: "#eee",
    height: 38,

    borderRadius: 8,
  },
});
