import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../apis/store";
import { Icon, Switch, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import settingsPic from "../../../assets/settings-128.png";
import { TextArea } from "react-native-ui-lib";
import arrowPic from "../../../assets/arrow.png";
import defaultPic from "../../../assets/default.png";
import plus from "../../../assets/plus.png";
import ReadOnlyTextInput from "../../components/readOnly/ReadOnlyTextInput";
import { useNavigation } from "@react-navigation/core";
import ROUTES from "../../navigations";
import BottomSheetModal from "../../components/bottomSheet/BottomSheetModal";
const EditProfile = () => {
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
          justifyContent: "space-between",

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
          style={{ color: theme.colors.surface, fontSize: 18, marginTop: 32 }}
        >
          Edit Profile
        </Text>
        <TouchableOpacity style={{ right: 10, marginTop: 32 }}>
          <Text style={{ color: theme.colors.surface }}>Save</Text>
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
          source={defaultPic}
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
          <Image
            source={plus}
            style={{
              width: 25,
              height: 25,
              borderRadius: 50,

              borderWidth: 1,
              borderColor: "black",

              backgroundColor: "gray",
            }}
          />
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
              value="Ahmed"
              h={35}
              w={160}
              editable={isEditable}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Last Name"
              value="Hasan"
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
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Gender"
              value="male"
              h={35}
              w={340}
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
          <TouchableOpacity onPress={handleTextInputValue}>
            <ReadOnlyTextInput
              label="Email address"
              value="ahmed@wishlistr.com"
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
            <ReadOnlyTextInput label="Address" value="Kuwait" h={35} w={340} />
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
              value="123"
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
