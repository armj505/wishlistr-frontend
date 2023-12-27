import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";
import SectionCard from "../../components/ui/SectionCard";
import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../../apis/explore";
import ROUTES from "../../navigations";

const ListBrands = () => {
  const { data } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getAllBrands(),
  });

  return (
    <Screen>
      <Title title="Brands" />
      <SectionCard
        data={data}
        routeName={ROUTES.EXPLORE.EXPLORE.BRAND}
        viewMore={false}
      />
    </Screen>
  );
};

export default ListBrands;

const styles = StyleSheet.create({});
