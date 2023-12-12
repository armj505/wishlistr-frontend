import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import Search from "../../components/ui/Search";
import SectionCard from "../../components/ui/SectionCard";
import { ScrollView } from "react-native-gesture-handler";

const Explore = () => {
  return (
    <Screen>
      <Title title="Explore" />
      <Search />
      <ScrollView style={styles.scrollView}>
        <SectionCard title="Brands" />
        <SectionCard title="Categories" />
      </ScrollView>
    </Screen>
  );
};

export default Explore;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 16,
    width: "100%",
  },
});
