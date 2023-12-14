import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component, useContext, useEffect, useState } from "react";
import Toast from "react-native-toast-message";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import { Icon, useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";
import giftPic from "../../../assets/gift-128.png";
import UserContext from "../../context/UserContext";
import * as Animatable from "react-native-animatable";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const navigation = useNavigation();

  const { mutate, error } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: () => login(emailOrPhone, password),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "Login successful",
        text2: `redirecting to home screen`,
      });
      setTimeout(() => {
        setUser(true);
      }, 1500);
    },
    onError: (error) => {
      let errorMessage = "An error occurred during login. Please try again.";

      if (error.response) {
        if (error.response.status === 403) {
          errorMessage = "Please verify your email to login";
        } else if (error.response.status === 401) {
          errorMessage = "Unauthorized access. Please check your credentials.";
        }
      }
      Toast.show({
        type: "error",
        position: "top",
        text1: "Login Error",
        text2: errorMessage,
        visibilityTime: 5000,
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
      <Animatable.View
        animation="fadeIn"
        duration={1500}
        delay={1000}
        style={{
          width: "100%",
          height: "40%",
          backgroundColor: theme.colors.onBackground,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animatable.Image source={giftPic} style={{ marginTop: 24 }} />
        <Animatable.Text
          animation="lightSpeedIn"
          delay={1000}
          style={{
            color: "white",
            fontSize: 26,
            marginTop: 30,
            fontWeight: "bold",
          }}
        >
          WishListr
        </Animatable.Text>
      </Animatable.View>
      <Animatable.View
        animation="bounceInUp"
        duration={1500}
        delay={500}
        style={{
          width: "100%",
          height: "60%",
          backgroundColor: theme.colors.surface,
          borderTopStartRadius: 40,
          borderTopEndRadius: 40,
          borderWidth: 6,

          borderColor: theme.colors.surfaceVariant,
          borderStyle: "solid",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: theme.colors.onSecondaryContainer,

            alignSelf: "flex-start",
            paddingVertical: 30,
            paddingLeft: 10,
            fontWeight: "bold",
          }}
          variant="titleLarge"
        >
          Login
        </Text>
        <TextInput
          style={{ borderColor: theme.colors.primary, width: "90%" }}
          mode="outlined"
          label="Email or Phone number"
          value={emailOrPhone}
          theme={{
            colors: {
              primary: theme.colors.onSecondaryContainer,
            },
          }}
          onChangeText={(text) => setEmailOrPhone(text)}
        />
        <TextInput
          style={{
            borderColor: theme.colors.onSecondaryContainer,
            width: "90%",
            marginTop: 20,
          }}
          mode="outlined"
          label="Password"
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
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.AUTH.AUTH.FORGOT)}
          style={{ marginTop: 10, alignSelf: "flex-end", paddingRight: 25 }}
        >
          <Text style={{ color: theme.colors.tertiary }}>Forgot Password?</Text>
        </TouchableOpacity>

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
            Login
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.AUTH.AUTH.REGISTER)}
          style={{
            elevation: 8,
            backgroundColor: theme.colors.outline,
            borderRadius: 8,
            marginTop: 10,
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
            Register
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
