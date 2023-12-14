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

const Settings = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            color: theme.colors.surface,
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 60,
          }}
        >
          Account Settings
        </Text>
        <Image
          style={{ width: 30, height: 30, marginTop: 10 }}
          source={settingsPic}
        />
      </View>
      <View
        style={{
          flex: 8,

          borderTopRightRadius: 40,
          borderTopLeftRadius: 40,
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "95%",

            height: "60%",
            marginTop: 20,
            borderRadius: 20,
            alignItems: "center",
            gap: 8,
          }}
        >
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: theme.colors.surface,
              height: 70,
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 32,
            }}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>
              Turn On/Off notifications
            </Text>
            <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
          </View>

          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: theme.colors.surface,
              height: 70,

              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 32,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Update phone number
            </Text>
            <TouchableOpacity
              onPress={() => console.log("update number pressed")}
              style={{
                backgroundColor: "green",
                width: 70,
                borderRadius: 8,
                paddingVertical: 10,
                alignItems: "center",
                elevation: 50,
                marginLeft: 8,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: theme.colors.surface,
              height: 70,

              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 30,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Update my password
            </Text>
            <TouchableOpacity
              onPress={() => console.log("update password pressed")}
              style={{
                backgroundColor: "green",
                width: 70,
                borderRadius: 8,
                paddingVertical: 10,
                alignItems: "center",
                elevation: 50,
                marginLeft: 24,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Update
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              borderBottomWidth: 1,
              borderColor: theme.colors.surface,
              height: 70,

              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 40,
            }}
          >
            <Text style={{ fontSize: 18, color: "white", fontWeight: "bold" }}>
              Delete my account
            </Text>
            <TouchableOpacity
              onPress={() => console.log("Delete Acc pressed")}
              style={{
                backgroundColor: "red",
                width: 70,
                borderRadius: 8,
                paddingVertical: 10,
                alignItems: "center",
                elevation: 50,
                marginLeft: 32,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await deleteToken();
            setUser(false);
          }}
          style={{
            elevation: 10,
            backgroundColor: theme.colors.surface,
            borderRadius: 8,
            marginTop: 30,
            width: "80%",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              color: "black",
              fontWeight: "bold",
              alignSelf: "center",
              textTransform: "uppercase",
            }}
          >
            SignOut
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({});
