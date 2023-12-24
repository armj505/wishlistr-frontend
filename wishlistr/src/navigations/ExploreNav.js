import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Explore from "../screens/explore/Explore";
import ListBrands from "../screens/explore/ListBrands";
import ListSubcategories from "../screens/explore/ListSubcategories";
import SubCategory from "../screens/explore/SubCategory";
import Trend from "../screens/explore/Trend";
import ROUTES from ".";
import Brand from "../screens/explore/Brand";
import { useTheme } from "@react-navigation/native";
const ExploreNav = () => {
  const { colors } = useTheme();
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.header },
        headerTintColor: `${colors.text}`,
        headerTitleStyle: {
          fontWeight: "800",
          fontSize: 32,
        },
        headerBackTitle: true,
      }}
    >
      <Stack.Screen name={ROUTES.EXPLORE.EXPLORE.EXPLORE} component={Explore} />
      <Stack.Screen name={ROUTES.EXPLORE.EXPLORE.BRAND} component={Brand} />
      <Stack.Screen
        name={ROUTES.EXPLORE.EXPLORE.LISTBRAND}
        component={ListBrands}
        options={{
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Stack.Screen
        name={ROUTES.EXPLORE.EXPLORE.LISTSUBCATEGORIES}
        component={ListSubcategories}
      />
      <Stack.Screen
        name={ROUTES.EXPLORE.EXPLORE.SUBCATEGORIES}
        component={SubCategory}
      />
      <Stack.Screen name={ROUTES.EXPLORE.EXPLORE.TREND} component={Trend} />
    </Stack.Navigator>
  );
};

export default ExploreNav;

const styles = StyleSheet.create({});
