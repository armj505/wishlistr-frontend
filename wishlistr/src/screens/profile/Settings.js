import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../apis/store";
import { Icon, Switch, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import arrowPic from "../../../assets/arrow.png";

import { useNavigation } from "@react-navigation/core";
import ROUTES from "../../navigations";

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const navigation = useNavigation();
  const [isEditable, setIsEditable] = useState(false);
  const handleTextInputValue = () => {
    setIsEditable(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,

          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.PROFILE.PROFILE.PROFILE)}
          style={{ left: 10, marginTop: 32 }}
        >
          <Image source={arrowPic} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <Text
          style={{
            color: theme.colors.surface,
            fontSize: 18,
            marginTop: 32,
            marginLeft: 122,
          }}
        >
          Profile Settings
        </Text>
      </View>
      <View
        style={{
          flex: 9,
          backgroundColor: theme.colors.surface,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: "pink",
            height: 250,
            marginTop: 20,
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: "gray",
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ color: "black" }}>Change Password</Text>
          </View>
          <TextInput
            secureTextEntry
            mode="outlined"
            style={{
              width: 350,
              marginTop: 10,
              marginLeft: 10,
              fontSize: 15,

              borderColor: "black",
            }}
            label="Current Password"
          />
          <TextInput
            secureTextEntry
            mode="outlined"
            style={{
              width: 350,
              marginTop: 10,
              marginLeft: 10,
              fontSize: 15,

              borderColor: "black",
            }}
            label="New Password"
          />
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              marginTop: 10,
              width: 100,
              backgroundColor: "gray",
              padding: 8,
              marginRight: 15,
              borderRadius: 10,
              elevation: 50,
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{ width: "100%", backgroundColor: "green", height: 200 }}
        ></View>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
