import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import ForgotPassword from "../screens/authScreens/ForgotPassword";

const AuthNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.AUTH.AUTH.Login} component={Login} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.Register} component={Register} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.Forgot} component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default AuthNav;
