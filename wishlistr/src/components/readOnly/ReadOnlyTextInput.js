import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const ReadOnlyTextInput = ({
  label,
  value,
  w,
  h,
  editable,
  onChangeText,
  defaultValue,
  placeholder,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={{ width: w, height: h }}
        editable={editable}
        pointerEvents="none"
        mode="outlined"
        onChangeText={onChangeText}
        defaultValue={defaultValue}
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
