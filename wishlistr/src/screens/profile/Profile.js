<<<<<<< HEAD
import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
=======
import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
>>>>>>> 6ec73e0fc9ca272b3bebe1865dd8e1d25602e3e8
import { deleteToken } from "../../apis/store";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigation();
  const firstName = {
    name: "Ahmad",
  };
  return (
    <Screen>
      <Title title={`Welcome, ${firstName.name} 😄`} />
      <Button
        title="SignOut"
        color="tomato"
        onPress={async () => {
          await deleteToken();
          setUser(false);
        }}
      />
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({});
