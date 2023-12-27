import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import { Icon, Switch, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import arrowPic from "../../../assets/arrow.png";
import defaultPic from "../../../assets/default.png";
import plus from "../../../assets/plus.png";
import ReadOnlyTextInput from "../../components/readOnly/ReadOnlyTextInput";
import { useNavigation } from "@react-navigation/core";
import ROUTES from "../../navigations";
import BottomSheetModal from "../../components/bottomSheet/BottomSheetModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyProfile, testUpdate, updateMyProfile } from "../../apis/profile";
import { AntDesign, EvilIcons } from "@expo/vector-icons";

const EditProfile = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [image, setImage] = useState(null);

  const [isEditable, setIsEditable] = useState(false);
  const handleTextInputValue = () => {
    setIsEditable(true);
  };
  const { data: myData, isLoading } = useQuery({
    queryKey: ["myInfo"],
    queryFn: () => getMyProfile(),
  });
  if (isLoading) {
    <View>
      <Text style={{ padding: 50, color: "white" }}>
        Fetching Data from the server
      </Text>
    </View>;
  }
  const profileImage = myData?.image
    ? { uri: BASE_URL + "/" + myData.image }
    : defaultPic;

  const { mutate } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: () => testUpdate(gender),
  });
  return (
    <View style={{ flex: 1, height: "100%" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          paddingTop: 20,
          paddingHorizontal: 20,
          flexDirection: "row",
          // alignContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.PROFILE.PROFILE.PROFILE)}
          style={
            {
              // height: "100%",
              // justifyContent: "center",
              // alignItems: "center",
            }
          }
        >
          <AntDesign name="arrowleft" color="black" size={20} />
        </TouchableOpacity>
        <Text style={{ color: "black", fontSize: 18 }}>Edit Profile</Text>
        <TouchableOpacity onPress={mutate} style={{}}>
          <Text style={{ color: theme.colors.surface }}></Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 9,
          backgroundColor: theme.colors.surface,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      >
        <Image
          style={{
            alignSelf: "center",
            marginTop: 10,
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "black",
          }}
          source={profileImage}
        />
        <TouchableOpacity
          onPress={() => console.log("pressed")}
          style={{
            position: "absolute",
            alignSelf: "center",
            marginTop: 90,

            borderRadius: 50,
          }}
        >
          {/* <Image
            source={plus}
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,

              borderWidth: 1,
              borderColor: "black",

              backgroundColor: "gray",
            }}
          /> */}
        </TouchableOpacity>

        <View
          style={{
            width: "100%",
            marginTop: 24,

            height: 60,

            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="First Name"
              value={myData?.name?.firstName}
              h={35}
              w={160}
              editable={isEditable}
              onChangeText={setFirstName}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Last Name"
              value={myData?.name?.lastName}
              h={35}
              w={160}
              editable={isEditable}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity>
            <ReadOnlyTextInput
              label="Gender"
              value={gender}
              placeholder={myData?.gender}
              h={35}
              w={340}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Email address"
              value={myData?.email}
              h={35}
              w={340}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Address"
              value={
                "city: " +
                myData?.address?.city +
                " street: " +
                myData?.address.street
              }
              h={35}
              w={340}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "100%",
            height: 60,
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Phone Number"
              value={myData?.phoneNumber}
              h={35}
              w={340}
            />
          </TouchableOpacity>
        </View>

        <BottomSheetModal />
      </View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
