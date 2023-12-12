import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { register } from "../../apis/auth";
import { useNavigation } from "@react-navigation/native"; // Import the useNavigation hook
import ROUTES from "../../navigations";
import { useTheme } from "react-native-paper";
import { TextInput } from "react-native-paper";
import { Text } from "react-native-paper";
import { Button } from "react-native-paper";
import Toast from "react-native-toast-message";
import * as Animatable from "react-native-animatable";

const Register = () => {
  const theme = useTheme();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () =>
      register(email, phoneNumber, firstName, lastName, password),

    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "Registration Successful",
        text2: `Verification email sent to ${email}`,
      });
      setTimeout(() => {
        navigation.navigate(ROUTES.AUTH.AUTH.Login);
      }, 3000);
    },
  });
  const handleRegister = () => {
    if (!firstName || !lastName || !email || !phoneNumber || !password) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation error",
        text2: "All fields are required",
        visibilityTime: 3000,
      });
      return;
    }

    mutate();
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.onBackground }}>
      <Animatable.View
        style={{
          width: "100%",
          height: "20%",
          backgroundColor: theme.colors.onBackground,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Animatable.Text
          animation="lightSpeedIn"
          delay={1000}
          style={{
            color: theme.colors.surface,
            fontSize: 25,
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
          height: "80%",
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
            fontWeight: "bold",

            alignSelf: "flex-start",
            paddingVertical: 30,
            paddingLeft: 10,
          }}
          variant="titleLarge"
        >
          Register
        </Text>
        <View
          style={{
            width: "100%",
            gap: 10,

            alignItems: "center",
          }}
        >
          <TextInput
            style={{
              borderColor: theme.colors.onSecondaryContainer,
              width: "95%",
            }}
            left={<TextInput.Icon icon="card-account-details-outline" />}
            mode="outlined"
            label="First name"
            value={firstName}
            theme={{
              colors: {
                primary: theme.colors.onSecondaryContainer,
              },
            }}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={{
              borderColor: theme.colors.onSecondaryContainer,
              width: "95%",
            }}
            left={<TextInput.Icon icon="card-account-details" />}
            mode="outlined"
            label="Last name"
            value={lastName}
            theme={{
              colors: {
                primary: theme.colors.onSecondaryContainer,
              },
            }}
            onChangeText={(text) => setLastName(text)}
          />

          <TextInput
            style={{
              borderColor: theme.colors.onSecondaryContainer,
              width: "95%",
            }}
            left={<TextInput.Icon icon="email" />}
            mode="outlined"
            label="Email"
            value={email}
            theme={{
              colors: {
                primary: theme.colors.onSecondaryContainer,
              },
            }}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={{
              borderColor: theme.colors.onSecondaryContainer,
              width: "95%",
            }}
            left={<TextInput.Icon icon="phone" />}
            mode="outlined"
            label="Phone number"
            value={phoneNumber}
            theme={{
              colors: {
                primary: theme.colors.onSecondaryContainer,
              },
            }}
            onChangeText={(text) => setPhoneNumber(text)}
          />

          <TextInput
            style={{
              borderColor: theme.colors.onSecondaryContainer,
              width: "95%",
            }}
            mode="outlined"
            label="Password"
            value={password}
            secureTextEntry
            left={<TextInput.Icon icon="lock" />}
            theme={{
              colors: {
                primary: theme.colors.onSecondaryContainer,
              },
            }}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <TouchableOpacity
          onPress={handleRegister}
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
            Register
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ROUTES.AUTH.AUTH.Login)}
          style={{ marginTop: 10 }}
        >
          <Text style={{ color: theme.colors.tertiary }}>
            Return back to login screen
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default Register;
