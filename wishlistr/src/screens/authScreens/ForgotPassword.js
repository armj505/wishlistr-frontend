import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Toast from "react-native-toast-message";
import { Icon, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import forgotPic from "../../../assets/pngwing.com.png";
import * as Animatable from "react-native-animatable";
import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
const ForgotPassword = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const sentence = "Forgot password?";
  const words = sentence.split(" ");
  const [email, setEmail] = useState("");
  const { mutate } = useMutation({
    mutationKey: ["forgot"],
    mutationFn: () => forgotPassword(email),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "A reset email has been sent to:",
        text2: `${email}`,
        visibilityTime: 2000,
      });
      setTimeout(() => {
        navigation.navigate(ROUTES.AUTH.AUTH.RESET);
      }, 1200);
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Forgot password failed",
        text2: error.response?.data?.error || "This email is not correct.",
        visibilityTime: 2000,
      });
    },
  });
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
          style={{ width: 320, height: 215, marginTop: 17 }}
          source={forgotPic}
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

        <Text style={{ paddingVertical: 5 }}>
          Please enter the email address associated with your account
        </Text>
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text.trim())}
          style={{
            borderColor: theme.colors.onSecondaryContainer,
            width: "90%",
            marginTop: 20,
          }}
          mode="outlined"
          label="email"
          left={<TextInput.Icon icon="email" />}
          theme={{
            colors: {
              primary: theme.colors.onSecondaryContainer,
            },
          }}
        />
        <TouchableOpacity
          onPress={mutate}
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
            Submit
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
