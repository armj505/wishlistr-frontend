import {
  StyleSheet,
  Text,
  View,
  Image,
  Touchable,
  Linking,
  Pressable,
} from "react-native";
import React, { useRef, modalRef, useState } from "react";
import { Button, Modal } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import EditTrashLink from "../editbottomsheet/EditTrashLink";

const WishListCard = ({ list }) => {
  // const modalRef = useRef();

  const handlePress = () => {
    // Open the web URL when long-pressed
    Linking.openURL("http://192.168.8.118:3000");
  };

  const modalizeRef = useRef(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const handleLongPress = (itemId) => {
  //   setSelectedItemId(itemId);
  //   modalizeRef.current?.open();
  // };

  const handleDelete = () => {
    console.log("deleting");
  };

  const handleLongPressOnw = () => {
    setModalVisible(true);
  };

  return (
    <View>
      <Button
        style={{ backgroundColor: "tomato", margin: 10 }}
        onLongPress={handlePress}
      >
        web
      </Button>

      <TouchableOpacity>
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

          <EditTrashLink />
        </View>
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
    justifyContent: "flex-start",
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
  bottomSheetContent: {
    padding: 16,
    backgroundColor: "white",
  },

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
