import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import FilterCard from "./FilterCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SectionCard = ({ title, data, routeName, viewMore }) => {
  const navigation = useNavigation();
  const cardList = data;
  const dataCards = cardList?.map((tag) => (
    <FilterCard category={tag} key={tag._id} />
  ));
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View>
        <View style={styles.cardContainers}>
          {dataCards}
          {!viewMore ? (
            <></>
          ) : (
            <TouchableOpacity
              style={{
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                justifyContent: "flex-end",
              }}
              onPress={() => navigation.navigate(routeName)}
            >
              <Text style={{ color: "#888" }}>View More</Text>
              <Ionicons name="chevron-forward" size={16} color="#888" />
            </TouchableOpacity>
          )}
        </View>
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
    height: "auto",
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
