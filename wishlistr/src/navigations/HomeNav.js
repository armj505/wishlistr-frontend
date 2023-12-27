import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Home from "../screens/home/Home";
import { useTheme } from "@react-navigation/native";
import Title from "../components/ui/Title";
import { LinearGradient } from "expo-linear-gradient";
import Search from "../components/ui/Search";
import ItemDetails from "../screens/wishlist/ItemDetails";

const HomeNav = () => {
  const { colors } = useTheme();
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={ROUTES.HOME.HOME.HOME}
      screenOptions={{
        title: "WishlistR",
        headerStyle: { backgroundColor: colors.header, height: 100 },
        headerMode: "float",
        headerShadowVisible: false,
        headerTitleContainerStyle: { paddingStart: 8 },

        // headerTintColor: `${colors.text}`,
        // headerTitleStyle: {
        //   fontWeight: "800",
        //   fontSize: 32,
        // },
        // headerBackTitle: true,
        headerBackground: () => (
          <LinearGradient
            style={{ flex: 1 }}
            colors={["#edff00ee", "#ffffff00"]}
          />
        ),
        // headerTransparent: true,
        // headerBlurEffect: "regular",
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen name={ROUTES.HOME.HOME.HOME} component={Home} />
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
