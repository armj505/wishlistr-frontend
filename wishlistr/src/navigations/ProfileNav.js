import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/profile/EditProfile";
import Settings from "../screens/profile/Settings";

const Stack = createStackNavigator();
const ProfileNav = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.PROFILE.PROFILE.PROFILE} component={Profile} />
      <Stack.Screen
        name={ROUTES.PROFILE.PROFILE.EDITPROFILE}
        component={EditProfile}
      />
      <Stack.Screen
        name={ROUTES.PROFILE.PROFILE.SETTINGS}
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
