import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Linking,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Title from "../ui/Title";
import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";
import HeaderIcon from "../ui/HeaderIcon";

import MyEditModal from "../../components/modal/MyEditModal";
import MyModal from "../modal/MyModal";

const WishListCard = ({ list }) => {
  const handlePress = () => {
    // Open the web URL when long-pressed
    Linking.openURL("http://192.168.8.118:3000");
  };
  // const [modalVisible, setModalVisible] = useState(false);

  // const [modalVisible, setModalVisible] = useState(false);
  // const openModal = () => {
  //   setModalVisible(true);
  // };

  // const closeModal = () => {
  //   setModalVisible(false);
  // };
  // const handleSubmit = (text) => {
  //   console.log("Submitted text:", text);
  //   closeModal();
  // };

  // const navigation = useNavigation();

  // const handlerLongClick = () => {
  //   console.log("Button Long Pressed");
  // };

  return (
    <View>
      <Button style={{ backgroundColor: "red" }} onLongPress={handlePress}>
        web
      </Button>

      <TouchableOpacity
      // onLongPress={openModal}>
      >
        <View style={styles.container}>
          <Image source={{ uri: list.image }} style={styles.image} />
          <View style={styles.textContainer}>
            <View style={styles.titleText}>
              <Text style={styles.text} numberOfLines={2}>
                {list.name}
              </Text>
              <Text style={styles.textItems}>{list.items.length} items</Text>
            </View>
          </View>
        </View>

        {/* <View>
          <MyModal
            visible={modalVisible}
            onClose={closeModal}
            onSubmit={handleSubmit}
          />
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

export default WishListCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 96,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 8,
    overflow: "hidden",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "flex-end",
    borderRadius: 8,
    opacity: 1,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    paddingStart: 16,
    alignItems: "center",
    gap: 8,
  },
  // iconContainer: {
  //   justifyContent: "center",
  //   backgroundColor: "white",
  //   width: 48,
  //   height: 48,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   borderRadius: 50,
  //   overflow: "hidden",
  //   borderWidth: 4,
  //   borderColor: "#eeeeee",
  // },
  // icon: {
  //   fontSize: 32,
  //   padding: 0,
  //   right: 0,
  //   top: 0,
  // },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textItems: {
    color: "#aaa",
  },
  titleText: {
    overflow: "scroll",
  },
});
