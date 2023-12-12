import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textField}>
        <Ionicons name="search" size={24} color="#888" />
        <TextInput
          style={styles.input}
          placeholder="Search in WishlistR"
        ></TextInput>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "auto",
    paddingHorizontal: 16,
  },
  textField: {
    width: "100%",
    height: 32,
    backgroundColor: "white",
    borderRadius: 8,
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  input: {
    height: "auto",
    paddingHorizontal: 8,
    paddingVertical: 8,
    flex: 1,
  },
});
