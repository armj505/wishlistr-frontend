import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useContext, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { TextInput } from "react-native-paper";
import { useTheme } from "react-native-paper";
import UserContext from "../../context/UserContext";
import { deleteToken } from "../../apis/store";

const BottomSheetModal = () => {
  const { user, setUser } = useContext(UserContext);
  const theme = useTheme();
  const modalizeRef = useRef(null);

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
              borderBottomWidth: 1,
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

              alignItems: "center",
              borderBottomWidth: 1,
              borderColor: "white",
            }}
          >
            <TextInput
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

              alignItems: "center",
              gap: 24,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                deleteToken();
                setUser(false);
              }}
              style={{
                width: "99%",
                backgroundColor: theme.colors.outline,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                borderRadius: 10,
                marginTop: 50,
              }}
            >
              <Text
                style={{ color: "white", fontSize: 16, fontWeight: "bold" }}
              >
                SignOut
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "99%",
                backgroundColor: "red",
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 8,
                borderRadius: 10,
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
