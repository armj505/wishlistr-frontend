import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";
import { useQuery } from "@tanstack/react-query";
import SectionCard from "../../components/ui/SectionCard";
import ROUTES from "../../navigations";

const ListSubcategories = ({ route }) => {
  const { tag } = route.params;
  return (
    <Screen>
      <Title title={tag.name} />
      <SectionCard
        data={tag.subcat}
        routeName={ROUTES.EXPLORE.EXPLORE.SUBCATEGORIES}
        viewMore={false}
      />
    </Screen>
  );
};

export default ListSubcategories;

const styles = StyleSheet.create({});
