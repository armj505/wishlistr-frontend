import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import Toast from "react-native-toast-message";
import { useMutation, useQuery } from "@tanstack/react-query";
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
import { getMyProfile } from "../../apis/profile";
import { BASE_URL } from "../../apis";

const Profile = () => {
  const theme = useTheme();
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigation();
  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: () => getMyProfile(),
  });
  const profileImage = profile?.image
    ? { uri: BASE_URL + "/" + profile.image }
    : defaultPic;
  if (isLoading) {
    <View>
      <Text style={{ padding: 50, color: "white" }}>
        Fetching Data from the server
      </Text>
    </View>;
  }
  console.log(BASE_URL + "/" + profile?.image);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
          {profile?.name.firstName + " " + profile?.name.lastName}
        </Text>
        <Text style={{ fontSize: 12 }}>24/05/1992</Text>
        <TouchableOpacity
          onPress={() => navigate.navigate(ROUTES.PROFILE.PROFILE.EDITPROFILE)}
          style={{
            backgroundColor: "gray",
            width: 180,
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 5,
            borderRadius: 10,
            elevation: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
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
        source={profileImage}
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
