import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav from "./HomeNav";
import WishlistNav from "./WishlistNav";
import ProfileNav from "./ProfileNav";
import ExploreNav from "./ExploreNav";
import ROUTES from ".";

const MainNav = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name={ROUTES.HOME.HOME_NAVIGATOR} component={HomeNav} />
      <Tab.Screen
        name={ROUTES.EXPLORE.EXPLORE_NAVIGATOR}
        component={ExploreNav}
      />
      <Tab.Screen
        name={ROUTES.WISHLIST.WISHLIST_NAVIGATOR}
        component={WishlistNav}
      />
      <Tab.Screen
        name={ROUTES.PROFILE.PROFILE_NAVIGATOR}
        component={ProfileNav}
      />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
