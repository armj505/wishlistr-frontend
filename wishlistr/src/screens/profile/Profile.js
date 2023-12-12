import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { deleteToken } from "../../apis/store";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";

const Profile = () => {
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
        }}
      />
    </Screen>
  );
};

export default Profile;

const styles = StyleSheet.create({});
