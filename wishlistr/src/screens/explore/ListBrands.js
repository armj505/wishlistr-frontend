import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";
import SectionCard from "../../components/ui/SectionCard";

const ListBrands = () => {
  return (
    <Screen>
      <Title title="Brands" />
      <SectionCard />
    </Screen>
  );
};

export default ListBrands;

const styles = StyleSheet.create({});
