import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";

const AuthNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.AUTH.AUTH.Login} component={Login} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.Register} component={Register} />
    </Stack.Navigator>
  );
};

export default AuthNav;
