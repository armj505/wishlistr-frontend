import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import FilterCard from "./FilterCard";

const SectionCard = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <View style={styles.cardContainers}>
          <FilterCard title="Apple" />
          <FilterCard title="Samsung" />
          <FilterCard title="Huawei" />
          <FilterCard title="Apple" />
          <FilterCard title="Samsung" />
          <FilterCard title="Huawei" />
          <FilterCard title="Apple" />
          <FilterCard title="Samsung" />
          <FilterCard title="Huawei" />
          <FilterCard title="Apple" />
          <FilterCard title="Samsung" />
          <FilterCard title="Huawei" />
          <FilterCard title="Apple" />
          <FilterCard title="Samsung" />
          <FilterCard title="Huawei" />
        </View>
        <Button title="View More" />
      </View>
    </View>
  );
};

export default SectionCard;

const styles = StyleSheet.create({
  container: {},
  title: {
    alignSelf: "flex-start",
    fontSize: 24,
    fontWeight: "800",
    color: "white",
    paddingStart: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  cardContainers: {
    width: "100%",
    height: 360,
    borderRadius: 16,
    marginBottom: 8,
    overflow: "hidden",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 16,
  },
});
