import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import Search from "../../components/ui/Search";
import SectionCard from "../../components/ui/SectionCard";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { getAllBrands, getAllCategories } from "../../apis/explore";
import ROUTES from "../../navigations";
import ItemCard from "../../components/ui/ItemCard";

const Explore = () => {
  const { data: brands_ } = useQuery({
    queryKey: ["brands"],
    queryFn: () => getAllBrands(),
  });
  console.log(brands_);
  //
  const { data: categories_ } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  // const items_ = [
  //   { name: "item 1", _id: 1 },
  //   { name: "item 2", _id: 2 },
  //   { name: "jacket", _id: 3 },
  //   { name: "something", _id: 4 },
  // ];

  // const brands_ = [
  //   { name: "brand 1", _id: 1 },
  //   { name: "brand 2", _id: 2 },
  //   { name: "brand 3", _id: 3 },
  //   { name: "brand 4", _id: 4 },
  //   { name: "brand 5", _id: 5 },
  //   { name: "brand 6", _id: 6 },
  // ];
  // const categories_ = [
  //   {
  //     name: "cat 1",
  //     _id: 1,
  //     subcat: [
  //       { name: "cat 1a", _id: 1 },
  //       { name: "cat 1b", _id: 2 },
  //       { name: "cat 1c", _id: 3 },
  //     ],
  //   },
  //   {
  //     name: "cat 2",
  //     _id: 2,
  //     subcat: [
  //       { name: "cat 2a", _id: 1 },
  //       { name: "cat 2b", _id: 2 },
  //       { name: "cat 2c", _id: 3 },
  //     ],
  //   },
  //   {
  //     name: "cat 3",
  //     _id: 3,
  //     subcat: [
  //       { name: "cat 3a", _id: 1 },
  //       { name: "cat 3b", _id: 2 },
  //       { name: "cat 3c", _id: 3 },
  //     ],
  //   },
  // ];
  const [query, setQuery] = useState("");

  const brandsSlice = brands_?.slice(0, 6);
  console.log(brandsSlice);

  const filteredItems =
    query === "" ? (
      <>
        <SectionCard
          title="Brands"
          data={brandsSlice}
          routeName={ROUTES.EXPLORE.EXPLORE.BRAND}
          viewMore={true}
        />
        <SectionCard
          title="Categories"
          data={categories_}
          routeName={ROUTES.EXPLORE.EXPLORE.LISTSUBCATEGORIES}
          viewMore={false}
          text={true}
        />
      </>
    ) : (
      items_?.filter((item) =>
        item.name
          .toLowerCase()
          .includes(query.toLowerCase())
          .map((item) => (
            <ItemCard item={item} key={item._id} wishList={true} />
          ))
      )
    );
  return (
    <Screen>
      {/* <Title title="Explore" /> */}
      <Search setQuery={setQuery} />
      <ScrollView style={styles.scrollView}>{filteredItems}</ScrollView>
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
