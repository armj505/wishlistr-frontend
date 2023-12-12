import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import ItemCard from "../../components/ui/ItemCard";

const Home = () => {
  const item = {
    name: "iPhone 15 Pro",
    image:
      "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-15-Pro-Max-256GB-Blue-Titanium_c5cd208a-a582-4a0b-9030-b484f3cfbee9.ac4fb383f6ec8f7f321ece6b4b807f48.jpeg",
  };
  return (
    <Screen>
      <Title title="Wishlistr" align="center" />
      <ScrollView style={styles.scrollView}>
        <ItemCard item={item} wishList={true} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
        <ItemCard item={item} />
      </ScrollView>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
    width: "100%",
  },
});
