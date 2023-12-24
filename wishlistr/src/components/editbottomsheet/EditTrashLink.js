import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { Icon, IconButton, TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../apis/store";
import { useMutation } from "@tanstack/react-query";
import { changePassword, deleteAccount } from "../../apis/auth";
import Toast from "react-native-toast-message";
import { deleteWishlist } from "../../apis/wishList";

const EditTrashLink = () => {
  const theme = useTheme();
  const modalizeRef = useRef(null);

  const { mutate: deleteWishList } = useMutation({
    mutationKey: ["deleteWishList"],
    mutationFn: () => deleteWishlist(),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "WishList has been deleted",
      });
      setTimeout(() => {
        deleteToken();
        setList(false);
      }, 2000);
    },
  });

  const confirmDeleteList = () => {
    Alert.alert(
      "Confirm Deletation",
      "Are you sure you want to delete this Wishlist?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            deleteWishList();
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
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Edit WishList
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
          ></View>

          <View
            style={{
              width: "100%",
              height: 88,

              alignItems: "center",
            }}
          >
            <TextInput
              placeholder="Change your WishList name"
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
              style={{
                backgroundColor: "#edff00",
                marginTop: 8,
                paddingVertical: 4,
                width: "99%",
                alignItems: "center",
                borderRadius: 6,
                elevation: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>Update</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: "#edff00",
                marginTop: 8,
                paddingVertical: 4,
                width: "99%",
                alignItems: "center",
                borderRadius: 6,
                elevation: 10,
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                Delete WishList
              </Text>
            </TouchableOpacity>
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
          ></View>
        </View>
      </Modalize>
    </>
  );
};

export default EditTrashLink;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "auto",

    height: 500,
    backgroundColor: "navy",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  openTitle: {
    backgroundColor: "#edff00",
    alignSelf: "center",
    paddingVertical: 10,
    width: "30%",
    margin: 20,
    alignItems: "flex-end",
    borderRadius: 10,
    elevation: 15,
  },
});
