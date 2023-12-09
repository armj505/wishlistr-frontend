import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Home from "../screens/home/Home";

const HomeNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME.HOME.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default HomeNav;

const styles = StyleSheet.create({});
