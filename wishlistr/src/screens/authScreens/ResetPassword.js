import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { Icon, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import * as Animatable from "react-native-animatable";
import resetPic from "../../../assets/reset2.png";
import { useMutation } from "@tanstack/react-query";
import { useNavigation, useRoute } from "@react-navigation/native";
import ROUTES from "../../navigations";
import { resetPassword } from "../../apis/auth";

const ResetPassword = () => {
  const theme = useTheme();
  const sentence = "Reset password?";
  const words = sentence.split(" ");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [resetToken, setResetToken] = useState("");
  //   const [confirmPassword, setConfirmPassword] = useState("");
  const navigation = useNavigation();
  const route = useRoute();
  //   const { resetToken } = route.params;

  const { mutate } = useMutation({
    mutationKey: ["reset", resetToken],
    mutationFn: () => resetPassword(resetToken, password),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "Password reset successful",
        text2: "Redirecting you to login screen",
      });
      setTimeout(() => {
        navigation.navigate(ROUTES.AUTH.AUTH.LOGIN);
      }, 1500);
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Password reset failed",
        text2: error.response.data?.error || "Inavalid or expired token",
      });
    },
  });
  const handleResetPassword = () => {
    mutate();
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.onBackground,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "13%",
          backgroundColor: theme.colors.onBackground,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animatable.Text
          animation="lightSpeedIn"
          delay={1000}
          style={{ color: theme.colors.surface, fontSize: 25, marginTop: 30 }}
        >
          WishListr
        </Animatable.Text>
      </View>
      <Animatable.View
        animation="bounceInUp"
        duration={1500}
        delay={500}
        style={{
          width: "100%",
          height: "87%",
          backgroundColor: theme.colors.surface,
          borderTopStartRadius: 20,
          borderTopEndRadius: 100,
          borderWidth: 6,

          borderColor: theme.colors.surfaceVariant,
          borderStyle: "solid",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 300, height: 185, marginTop: 17 }}
          source={resetPic}
        />
        {words.map((word, index) => {
          return (
            <Text
              style={{
                alignSelf: "flex-start",
                paddingLeft: 20,
                fontSize: 35,
                fontWeight: "bold",
              }}
              key={index}
            >
              {word}
            </Text>
          );
        })}
        <TextInput
          style={{
            borderColor: theme.colors.onSecondaryContainer,
            width: "90%",
            marginTop: 20,
          }}
          mode="outlined"
          label="Reset Token"
          value={resetToken}
          onChangeText={(text) => setResetToken(text.trim())}
          theme={{
            colors: {
              primary: theme.colors.onSecondaryContainer,
            },
          }}
        />
        <TextInput
          style={{
            borderColor: theme.colors.onSecondaryContainer,
            width: "90%",
            marginTop: 20,
          }}
          mode="outlined"
          label="New password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPasswordVisible}
          right={
            <TextInput.Icon
              icon={isPasswordVisible ? "eye-off" : "eye"}
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          }
          theme={{
            colors: {
              primary: theme.colors.onSecondaryContainer,
            },
          }}
        />

        <TouchableOpacity
          onPress={handleResetPassword}
          style={{
            elevation: 8,
            backgroundColor: "black",
            borderRadius: 8,
            marginTop: 16,
            width: "60%",
            paddingVertical: 8,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: "#fff",
              fontWeight: "bold",
              alignSelf: "center",
              textTransform: "uppercase",
            }}
          >
            Reset
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
