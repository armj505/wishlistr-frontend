import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { useNavigation, useTheme } from "@react-navigation/native";
import Title from "../../components/ui/Title";
import WishListCard from "../../components/wishList/WishListCard";
import Screen from "../../components/ui/Screen";
import { ScrollView } from "react-native-gesture-handler";
import { useQuery } from "@tanstack/react-query";
import { getAllWishlists } from "../../apis/wishList";

import { Button, Icon } from "react-native-paper";
import MyModal from "../../components/modal/MyModal";
import MyEditModal from "../../components/modal/MyEditModal";
import EditTrashLink from "../../components/editbottomsheet/EditTrashLink";
import Create from "../../components/editbottomsheet/Create";
import CreateWishlist from "./CreateWishlist";
import PrimaryButton from "../../components/ui/PrimaryButton";
import ROUTES from "../../navigations";
import WishlistDetails from "./WishlistDetails";

const Wishlist_ = () => {
  const { colors } = useTheme();
  const navigate = useNavigation();
  const handleSubmit = (text) => {
    console.log("Submitted text:", text);
    closeModal();
  };

  const handleLongPress = (itemId) => {
    setSelectedItemId(itemId);
    modalizeRef.current?.open();
  };
  const navigateToWishlistDetails = (wishlistId) => {
    navigate.navigate(ROUTES.WISHLIST.WISHLIST.WISHLISTDETAILS, {
      wishlistId: wishlistId,
    });
  };
  const { data, isLoading } = useQuery({
    queryKey: ["wishaList"],
    queryFn: () => getAllWishlists(),
  });
  console.log(data);

  const wishlists = data?.map((item) => (
    <TouchableOpacity
      key={item._id}
      onPress={() => navigateToWishlistDetails(item._id)}
    >
      <WishListCard list={item} key={item._id} />
    </TouchableOpacity>
  ));

  if (isLoading) {
    return (
      <View>
        <Text style={{ color: "tomato" }}>Fetching Data</Text>
      </View>
    );
  }

  return (
    <Screen>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Title title="Wishlists" />

        <View style={styles.iconContainer}>
          <TouchableOpacity></TouchableOpacity>
        </View>
      </View>
      <Create />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {wishlists}
      </ScrollView>
    </Screen>
  );
};

export default Wishlist_;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
    width: "100%",
  },
  iconContainer: {
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 8,
  },
});
