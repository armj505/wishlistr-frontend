import { StyleSheet, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";

import Wishlist_ from "../screens/wishList/Wishlist";
import SharedWishList from "../screens/wishList/SharedWishList";
import WishlistDetails from "../screens/wishList/WishlistDetails_";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

const WishlistNav = () => {
  const Stack = createStackNavigator();
  const { colors } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        title: "WishList",
        headerStyle: { backgroundColor: colors.header, height: 100 },
        headerMode: "float",
        headerTitleContainerStyle: { paddingStart: 8 },
        headerBackground: () => (
          <LinearGradient
            style={{ flex: 1 }}
            colors={[`${colors.primary}`, "#ffffff00"]}
          />
        ),
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name={ROUTES.WISHLIST.WISHLIST.WISHLIST} // Use a simple string for the name
        component={Wishlist_}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
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
