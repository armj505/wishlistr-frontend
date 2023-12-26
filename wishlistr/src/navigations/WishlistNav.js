import { StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";

import Wishlist_ from "../screens/wishList/Wishlist";
import WishlistDetails from "../screens/wishList/WishlistDetails";
import SharedWishList from "../screens/wishList/SharedWishList";

const WishlistNav = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={ROUTES.WISHLIST.WISHLIST.WISHLIST} // Use a simple string for the name
        component={Wishlist_}
      />
      <Stack.Screen
        name={ROUTES.WISHLIST.WISHLIST.WISHLISTDETAILS}
        component={WishlistDetails}
      />
      <Stack.Screen
        name={ROUTES.WISHLIST.WISHLIST.SHARE}
        component={SharedWishList}
      />
    </Stack.Navigator>
  );
};

export default WishlistNav;

const styles = StyleSheet.create({});
