import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import UserContext from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigation();

  const { mutate, error } = useMutation({
    mutationKey: ["logIn"],
    mutationFn: () => login(email, password),
  });
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",

        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          borderWidth: 1,
          width: "90%",
        }}
      >
        <Text>{JSON.stringify(user)}</Text>
        <Text style={{ fontSize: 20, paddingVertical: 10 }}>Login</Text>
        <Text style={{ fontSize: 15, paddingVertical: 10 }}>
          Email or Phone number
        </Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => {
            setEmail(text);
          }}
          style={{
            borderWidth: 1,
            width: "60%",
            height: 35,
            justifyContent: "center",
          }}
        />
        <Text style={{ fontSize: 15, paddingVertical: 10 }}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}
          style={{
            borderWidth: 1,
            width: "60%",
            height: 35,
            justifyContent: "center",
          }}
        />
        <TouchableOpacity
          onPress={mutate}
          style={{
            backgroundColor: "#3498db",
            padding: 10,
            borderRadius: 5,

            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate.navigate(ROUTES.AUTH.AUTH.Register);
          }}
          style={{
            backgroundColor: "#3498db",
            padding: 10,
            borderRadius: 5,

            marginTop: 10,
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>Register</Text>
        </TouchableOpacity>
        <Text>{error?.response?.data}</Text>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
