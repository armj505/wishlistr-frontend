import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from ".";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/profile/EditProfile";

const Stack = createStackNavigator();
const ProfileNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.PROFILE.PROFILE.PROFILE} component={Profile} />
      <Stack.Screen
        name={ROUTES.PROFILE.PROFILE.EDITPROFILE}
        component={EditProfile}
      />
    </Stack.Navigator>
  );
};

export default ProfileNav;

const styles = StyleSheet.create({});
