import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Modalize } from "react-native-modalize";
import { TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";
import UserContext from "../../context/UserContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { createList, deleteWishlist } from "../../apis/wishList";
import CreateWishlist from "../../screens/wishList/CreateWishlist";

const Create = () => {
  const theme = useTheme();
  const query = useQueryClient();
  const modalizeRef = useRef(null);
  const [inputText, setInputText] = useState("");
  const { mutate: createWishList } = useMutation({
    mutationKey: ["cahngePassword"],
    mutationFn: () => createList(inputText),
    onSuccess: async () => {
      Toast.show({
        type: "success",
        text1: "WishList Created Successfuly",

        visibilityTime: 1000,
      });
      query.invalidateQueries("wishaList");
    },
    onError: (error) => {
      Toast.show({
        type: "error",
        text1: "Not created",
        text2: error.message || "An unexpected error occurred",
        visibilityTime: 3000,
      });
    },
  });

  const onOpen = () => {
    modalizeRef.current?.open();
  };
  return (
    <>
      <TouchableOpacity style={styles.openTitle} onPress={onOpen}>
        <Text style={{ color: "black", fontSize: 16, fontWeight: "bold" }}>
          Create new WishList
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
              Create Your New WishList
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
              onChangeText={(text) => setInputText(text)}
              value={inputText}
              placeholder="Name Your WishList"
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
              <TouchableOpacity
                onPress={createWishList}
                style={{
                  backgroundColor: "#edff00",
                  marginTop: 30,
                  width: "90%",
                  paddingVertical: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 15, fontWeight: "bold" }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modalize>
    </>
  );
};

export default Create;

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
    backgroundColor: "#edff00",
    alignSelf: "center",
    paddingVertical: 10,
    width: "90%",

    alignItems: "center",
    borderRadius: 10,
    elevation: 15,
  },
});
