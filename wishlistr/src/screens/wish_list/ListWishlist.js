import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-ui-lib";
import { useQuery } from "@tanstack/react-query";

const ListWishlist = () => {
  const { data } = useQuery({
    queryKey: ["wishlists"],
    queryFn: () => getAllWishlists(),
  });
  const wishList = data?.map((wishlist) => {
    // return <WishListCard name={wishlist.name} />;
  });
  return wishList;

  <Button
    title={listTitle}
    onPress={() => {
      navigation.navigate({ wishList });
    }}
  ></Button>;
};

export default { ListWishlist, WishListCard };

const styles = StyleSheet.create({});
