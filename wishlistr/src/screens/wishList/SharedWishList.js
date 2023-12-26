import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getwishlistdetails } from "../../apis/wishList";

const SharedWishList = ({ route }) => {
  const { wishlistId } = route.params;

  const { data, isLoading } = useQuery({
    queryKey: ["getList"],
    queryFn: () => getwishlistdetails(wishlistId),
  });

  console.log(data);
  return (
    <View>
      <Text>Hiiiiiiiiiiiiiiii</Text>
    </View>
  );
};

export default SharedWishList;

const styles = StyleSheet.create({});
