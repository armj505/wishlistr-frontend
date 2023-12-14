import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { deleteToken } from "../../apis/store";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";

import UserContext from "../../context/UserContext";
import { Icon, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import defaultPic from "../../../assets/default.png";
import settingsPic from "../../../assets/settings-128.png";
import * as Animatable from "react-native-animatable";
import ReadOnlyTextInput from "../../components/readOnly/ReadOnlyTextInput";
import giftPic from "../../../assets/gift-128.png";

const Profile = () => {
  const theme = useTheme();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigate.navigate(ROUTES.PROFILE.PROFILE.SETTINGS)}
          style={{ alignSelf: "flex-end", paddingRight: 20 }}
        >
          <Image source={settingsPic} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <Text
          style={{
            color: theme.colors.surface,
            fontSize: 20,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          My profile
        </Text>
      </View>
      <View
        style={{
          backgroundColor: theme.colors.surface,
          flex: 8,

          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          borderWidth: 6,
          borderStyle: "solid",
          borderColor: theme.colors.surfaceVariant,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            marginTop: 60,
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          A.Hasan
        </Text>
        <Text style={{ fontSize: 12 }}>24/05/1992</Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "flex-start",
            gap: 16,
          }}
        >
          <Text
            style={{
              marginTop: 20,
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
            }}
          >
            My Gifts
          </Text>
        </View>

        <ScrollView
          //start
          style={{
            width: "100%",
            borderTopWidth: 1,
            height: 495,
            padding: 10,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "auto",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 15,
            }}
          >
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
            <View
              style={{
                width: 150,
                height: 150,
                backgroundColor: "black",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image source={giftPic} style={{ width: 80, height: 80 }} />
            </View>
          </View>
        </ScrollView>
      </View>
      <Image
        source={defaultPic}
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          borderRadius: 50,
          borderWidth: 6,
          borderColor: theme.colors.surfaceVariant,
          position: "absolute",
          marginTop: 120,
        }}
      />
    </View>
  );
};

export default Profile;
//
const styles = StyleSheet.create({});
