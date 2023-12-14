import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import Search from "../../components/ui/Search";
import SectionCard from "../../components/ui/SectionCard";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { getAllBrands, getAllCategories } from "../../apis/explore";
import ROUTES from "../../navigations";

const Explore = () => {
  const { data: brands_ } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getAllBrands(),
  });

  const { data: categories_ } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  // const brands_ = [
  //   { name: 1, _id: 1 },
  //   { name: 2, _id: 2 },
  //   { name: 3, _id: 3 },
  // ];
  // const categories_ = [
  //   { name: 1, _id: 1 },
  //   { name: 2, _id: 2 },
  //   { name: 3, _id: 3 },
  // ];
  return (
    <Screen>
      <Title title="Explore" />
      <Search />
      <ScrollView style={styles.scrollView}>
        <SectionCard
          title="Brands"
          data={brands_}
          routeName={ROUTES.EXPLORE.EXPLORE.BRAND}
          viewMore={true}
        />
        <SectionCard
          title="Categories"
          data={categories_}
          routeName={ROUTES.EXPLORE.EXPLORE.LISTSUBCATEGORIES}
          viewMore={false}
        />
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
