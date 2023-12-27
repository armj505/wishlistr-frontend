import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FilterCard from "./FilterCard";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";

const SectionCard = ({ title, data, routeName, text, viewMore }) => {
  const navigation = useNavigation();
  const cardList = data;
  const dataCards = cardList?.map((tag) => (
    <FilterCard
      category={tag}
      key={tag._id}
      routeName={routeName}
      param={{ tag: tag }}
      text={text}
    />
  ));
  return (
    <View style={[styles.container, { flex: 1, width: "100%" }]}>
      {title ? <Text style={styles.title}>{title}</Text> : <></>}
      <ScrollView style={{ flex: 1 }}>
        <View style={[styles.cardContainers, { width: "100%", flex: 1 }]}>
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
              onPress={() =>
                navigation.navigate(ROUTES.EXPLORE.EXPLORE.LISTBRAND)
              }
            >
              <Text style={{ color: "#888" }}>View More</Text>
              <Ionicons name="chevron-forward" size={16} color="#888" />
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
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
    paddingStart: 16,
    paddingBottom: 8,
    paddingTop: 16,
  },
  cardContainers: {
    width: "100%",
    height: "100%",
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
