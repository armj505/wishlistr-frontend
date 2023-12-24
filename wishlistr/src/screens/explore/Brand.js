import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";

const Brand = ({ route }) => {
  const { tag } = route.params;
  return (
    <Screen>
      <Title title={tag.name} />
    </Screen>
  );
};

export default Brand;

const styles = StyleSheet.create({});
