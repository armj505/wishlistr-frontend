import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Login from "../screens/authScreens/Login";
import Register from "../screens/authScreens/Register";
import ForgotPassword from "../screens/authScreens/ForgotPassword";
import ResetPassword from "../screens/authScreens/ResetPassword";

const AuthNav = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.AUTH.AUTH.LOGIN} component={Login} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.REGISTER} component={Register} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.FORGOT} component={ForgotPassword} />
      <Stack.Screen name={ROUTES.AUTH.AUTH.RESET} component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default AuthNav;
