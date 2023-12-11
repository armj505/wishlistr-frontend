import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { deleteToken } from "../../apis/store";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import Title from "../../components/ui/Title";
import Screen from "../../components/ui/Screen";
import UserContext from "../../context/UserContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigation();
  return (
    <Screen>
      <Title title="My Profile" />

      <Button
        title="SignOut"
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
