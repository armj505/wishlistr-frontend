import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Home from "../screens/home/Home";
import ItemDetails from "../screens/wishList/ItemDetails";

const HomeNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME.HOME.HOME}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ROUTES.HOME.HOME.HOME}
        component={Home}
        options={{ title: ROUTES.HOME.HOME.HOME }}
      />
      <Stack.Screen
        name={ROUTES.WISHLIST.WISHLIST.ITEM}
        component={ItemDetails}
        options={{ title: ROUTES.WISHLIST.WISHLIST.ITEM }}
      />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
