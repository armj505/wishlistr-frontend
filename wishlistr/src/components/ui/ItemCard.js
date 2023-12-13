import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation, useTheme } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import ROUTES from "../../navigations";

const ItemCard = ({ item, wishList }) => {
  const navigation = useNavigation();
  const [isAdded, setIsAdded] = useState(false);
  const { colors } = useTheme();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.push(ROUTES.WISHLIST.WISHLIST.ITEM, { item: item });
        }}
        onLongPress={() => {
          setIsAdded(!isAdded);
          console.log("like");
        }}
      >
        <View style={[styles.container, { backgroundColor: colors.card }]}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <View style={styles.textContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {!wishList ? (
        !isAdded ? (
          <Ionicons
            name="heart-outline"
            size={32}
            color="#eee"
            style={styles.icon}
          />
        ) : (
          <Ionicons name="heart" size={32} color="tomato" style={styles.icon} />
        )
      ) : (
        <></>
      )}
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 192,
    borderRadius: 16,
    marginBottom: 8,
    overflow: "hidden",
    // padding: 8,
    alignItems: "center",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    overflow: "hidden",
    backgroundColor: "white",
    flex: 1,
    borderRadius: 8,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
    alignSelf: "flex-start",
    paddingStart: 16,
    height: 32,
  },
  text: {
    fontSize: 16,
    fontWeight: "900",
  },
  icon: {
    position: "absolute",
    width: 32,
    height: 32,
    top: 16,
    right: 16,
  },
});
