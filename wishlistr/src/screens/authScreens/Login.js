import {
  StyleSheet,
  Switch,
  Text,
  View,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";

const Login = () => {
  const [isEmaileLogin, setIsEmailLogin] = useState(true);
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate(ROUTES.AUTH.AUTH.Register);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text>{isEmaileLogin ? "Email" : "Phone number"}</Text>
      <TextInput
        style={styles.input}
        placeholder={isEmaileLogin ? "Email" : "Phone number"}
      />

      <Text>Password</Text>
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Sign in with:</Text>
        <Switch
          value={isEmaileLogin}
          onValueChange={() => setIsEmailLogin(!isEmaileLogin)}
        />
        <Text style={styles.toggleLabel}>
          {isEmaileLogin ? "Email" : "Phone number"}
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <Button title="Login" style={styles.button} />
        <Button
          title="register"
          style={styles.button}
          onPress={handleNavigation}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingHorizontal: 16,

    marginTop: 16,
  },
  title: {
    paddingVertical: 10,
    fontSize: 25,
  },

  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },

  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  toggleLabel: {
    marginLeft: 10,
  },
});

export default Login;
