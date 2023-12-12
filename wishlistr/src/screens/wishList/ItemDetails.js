import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";

const ItemDetails = () => {
  const item = {
    name: "iPhone 15 Pro",
    image:
      "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-15-Pro-Max-256GB-Blue-Titanium_c5cd208a-a582-4a0b-9030-b484f3cfbee9.ac4fb383f6ec8f7f321ece6b4b807f48.jpeg",
  };
  return (
    <Screen>
      <Title title={item.name} />
    </Screen>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({});
