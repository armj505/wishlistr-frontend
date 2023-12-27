import { StyleSheet, Text, View, Image, Linking } from "react-native";
import React, { useRef, modalRef, useState } from "react";
import { Button, Modal } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

import EditTrashLink from "../editbottomsheet/EditTrashLink";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";
import giftPic from "../../../assets/gift-128.png";

const WishListCard = ({ list }) => {
  // const modalRef = useRef();
  const { colors } = useTheme();
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
  console.log(list.items);
  return (
    <View style={{}}>
      {/* <Button
        style={{ backgroundColor: "tomato", margin: 10 }}
        onLongPress={handlePress}
      >
        web
      </Button> */}

      <TouchableOpacity>
        <LinearGradient
          colors={[`${colors.gradient}`, "#8a8b8a33", "#00000011"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0.2 }}
          style={{
            width: "100%",
            height: "100%",
            zIndex: 9,
            position: "absolute",
            // opacity: 1,
          }}
        />
        <View style={[styles.container, {}]}>
          <Image
            source={
              list.items.length == 0
                ? giftPic
                : { uri: list?.items[0]?.item?.image }
            }
            style={[
              styles.image,
              list.items.length == 0 && { backgroundColor: "black" },
            ]}
          />
          <View style={[styles.textContainer, {}]}>
            <View style={styles.titleText}>
              <Text style={styles.text} numberOfLines={2}>
                {list.name}
              </Text>

              <Text style={styles.textItems}>{list.items.length} items</Text>
            </View>
          </View>

          {/* <EditTrashLink /> */}
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
