import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeNav from "./HomeNav";
import WishlistNav from "./WishlistNav";
import ProfileNav from "./ProfileNav";
import ExploreNav from "./ExploreNav";
import ROUTES from ".";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import { useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const MainNav = () => {
  const Tab = AnimatedTabBarNavigator();
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={ROUTES.HOME.HOME_NAVIGATOR}
      tabBarOptions={{
        activeTintColor: colors.textMainBar,
        inactiveTintColor: "#fff",
        activeBackgroundColor: colors.textMainBackground,
      }}
      appearance={{
        shadow: true,
        floating: true,
        whenActiveShow: "label-only",
        dotSize: "small",
        tabButtonLayout: "vertical",
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME.HOME_NAVIGATOR}
        component={HomeNav}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size ? size : 24}
              color={focused ? colors.text : color.cards}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.EXPLORE.EXPLORE_NAVIGATOR}
        component={ExploreNav}
        options={{
          title: "Explore",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={size ? size : 24}
              color={focused ? colors.text : color.cards}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.WISHLIST.WISHLIST_NAVIGATOR}
        component={WishlistNav}
        options={{
          title: "Wishlist",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "list" : "list-outline"}
              size={size ? size : 24}
              color={focused ? colors.text : color.cards}
              focused={focused}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE.PROFILE_NAVIGATOR}
        component={ProfileNav}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={size ? size : 24}
              color={focused ? colors.text : color.cards}
              focused={focused}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNav;

const styles = StyleSheet.create({});
