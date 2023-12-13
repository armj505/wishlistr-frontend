import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import { Icon, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import defaultPic from "../../../assets/default.png";
import * as Animatable from "react-native-animatable";
import ReadOnlyTextInput from "../../components/readOnly/ReadOnlyTextInput";
import savePic from "../../../assets/savePic.png";
import cancelPic from "../../../assets/cancel.png";
const EditProfile = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flex: 2,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => console.log("cancel pressed")}>
          <Image style={{ width: 18, height: 18 }} source={cancelPic} />
        </TouchableOpacity>

        <Text
          style={{
            color: theme.colors.surface,

            fontSize: 24,
            fontWeight: "bold",
          }}
        >
          Edid Profile
        </Text>

        <TouchableOpacity onPress={() => console.log("Save changes pressed")}>
          <Image style={{ width: 25, height: 25 }} source={savePic} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 8,
          backgroundColor: theme.colors.surface,
        }}
      ></View>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({});
