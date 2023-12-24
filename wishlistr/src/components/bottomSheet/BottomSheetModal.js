import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../apis/store";
import { useMutation } from "@tanstack/react-query";
import { changePassword, deleteAccount } from "../../apis/auth";
import Toast from "react-native-toast-message";

const BottomSheetModal = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const modalizeRef = useRef(null);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newtPassword, setNewPassword] = useState("");

  const { mutate: changePass } = useMutation({
    mutationKey: ["cahngePassword"],
    mutationFn: () => changePassword(currentPassword, newtPassword),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "Change password successful",
        text2: "Redirecting to login screen",
        visibilityTime: 2000,
      });
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Password change failed",
        text2: error.message || "An unexpected error occurred",
        visibilityTime: 3000,
      });
    },
  });

  const { mutate: deletAcc } = useMutation({
    mutationKey: ["deleteAccount"],
    mutationFn: () => deleteAccount(),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "Account has been deleted",
      });
      setTimeout(() => {
        deleteToken();
        setUser(false);
      }, 2000);
    },
  });

  const handleChangePassword = () => {
    if (!currentPassword || !newtPassword) {
      Toast.show({
        type: "error",
        position: "top",
        text1: "Validation error",
        text2: "All fields are required",
        visibilityTime: 3000,
      });
      return;
    }

    changePass();
  };
  const confirmDeleteAccount = () => {
    Alert.alert(
      "Confirm Deletion",
      "Are you sure you want to delete your account?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deletAcc();
          },
        },
      ]
    );
  };
  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <TouchableOpacity style={styles.openTitle} onPress={onOpen}>
        <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
          Accoun Settings
        </Text>
      </TouchableOpacity>

      <Modalize ref={modalizeRef} adjustToContentHeight>
        <View style={styles.modalContent}>
          <View
            style={{
              width: "100%",
              height: 30,

              borderColor: "white",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Change Account Password
            </Text>
          </View>
          <View
            style={{
              width: "100%",
              height: 145,
              borderBottomWidth: 1,
              alignItems: "center",

              borderColor: "white",
            }}
          >
            <TextInput
              onChangeText={(text) => setCurrentPassword(text)}
              placeholder="Current Password"
              style={{
                width: "100%",
                marginTop: 10,
                alignSelf: "center",
                marginLeft: 1,
                height: 40,
                backgroundColor: "white",
                justifyContent: "center",
              }}
            />
            <View
              style={{
                width: "100%",
                height: 88,

                alignItems: "center",
              }}
            >
              <TextInput
                onChangeText={(text) => setNewPassword(text)}
                placeholder="New Password"
                style={{
                  width: "100%",
                  marginTop: 10,
                  alignSelf: "center",
                  marginLeft: 1,
                  height: 40,
                  backgroundColor: "white",
                }}
              />
              <TouchableOpacity
                onPress={handleChangePassword}
                style={{
                  backgroundColor: "white",
                  marginTop: 8,
                  paddingVertical: 4,
                  width: "99%",
                  alignItems: "center",
                  borderRadius: 6,
                  elevation: 10,
                }}
              >
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: "100%",

              height: 220,
              flexDirection: "row",

              alignItems: "center",
              justifyContent: "center",
              gap: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                deleteToken();
                setUser(false);
              }}
              style={{
                width: "45%",
                backgroundColor: theme.colors.outline,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                borderRadius: 10,
                marginTop: 124,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                SignOut
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={confirmDeleteAccount}
              style={{
                width: "45%",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                borderRadius: 10,
                marginTop: 124,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                Delete Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    padding: 16,
    height: 500,
    backgroundColor: "black",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  openTitle: {
    backgroundColor: "gray",
    alignSelf: "center",
    paddingVertical: 10,
    width: "90%",

    alignItems: "center",
    borderRadius: 10,
    elevation: 15,
  },
});
