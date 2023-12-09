import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { deleteToken } from "../../apis/store";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";

const Profile = () => {
  const navigate = useNavigation();
  return (
    <View>
      <Text>Profile</Text>

      <Button
        title="SignOut"
        onPress={async () => {
          await deleteToken();
        }}
      />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
