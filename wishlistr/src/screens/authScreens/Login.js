import { StyleSheet, View, TouchableOpacity } from "react-native";
import React, { Component, useContext, useState } from "react";
import Toast from "react-native-toast-message";

import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import { useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Button } from "react-native-paper";
import { Text } from "react-native-paper";

const Login = () => {
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
        navigation.navigate(ROUTES.HOME.HOME.Home);
      }, 3000);
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
    <View style={{ flex: 1, backgroundColor: theme.colors.primary }}>
      <View
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: theme.colors.primary,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white", fontSize: 25 }}>WishLister</Text>
      </View>
      <View
        style={{
          width: "100%",
          height: "80%",
          backgroundColor: theme.colors.surface,
          borderTopStartRadius: 10,
          borderTopEndRadius: 80,
          borderWidth: 6,

          borderColor: theme.colors.surfaceDisabled,
          borderStyle: "solid",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: theme.colors.primary,

            alignSelf: "flex-start",
            paddingVertical: 30,
            paddingLeft: 10,
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
              primary: theme.colors.primary,
            },
          }}
          onChangeText={(text) => setEmailOrPhone(text)}
        />
        <TextInput
          style={{
            borderColor: theme.colors.primary,
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
              primary: theme.colors.primary,
            },
          }}
          onChangeText={(text) => setPassword(text)}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.AUTH.AUTH.Forgot)}
          style={{ marginTop: 10, alignSelf: "flex-end", paddingRight: 25 }}
        >
          <Text style={{ color: theme.colors.primary }}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          style={{ width: 210, marginTop: 20 }}
          icon="login"
          mode="contained"
          onPress={mutate}
          labelStyle={{ fontSize: 17 }}
        >
          login
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.AUTH.AUTH.Register)}
          style={{ marginTop: 10 }}
        >
          <Text style={{ color: theme.colors.primary }}>
            Don't have an account? Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
