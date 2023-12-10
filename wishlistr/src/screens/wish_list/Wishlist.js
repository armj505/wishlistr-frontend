// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const styles = StyleSheet.create({});

import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { Button, Title } from "react-native-paper";
import { Card } from "react-native-ui-lib";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer
import WishListCard from "../../components/wishList/WishListCard";

const TrashButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "gray",
        padding: 30,
        borderRadius: 5,
      }}
    >
      <Icon name="trash" size={35} color="red" />
    </TouchableOpacity>
  );
};

const AddButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "gray",
        padding: 30,
        borderRadius: 5,
      }}
    >
      <Icon name="plus" size={35} color="red" />
    </TouchableOpacity>
  );
};
const LinkButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "gray",
        padding: 30,
        borderRadius: 5,
      }}
    >
      <Icon name="link" size={35} color="red" />
    </TouchableOpacity>
  );
};
const Wishlist = () => {
  return (
    <View
      style={
        {
          // flexDirection: "column",
          // marginTop: "20%",
          // padding: "10",
        }
      }
    >
      <View
        style={{
          width: 100,
        }}
      >
        <TrashButton></TrashButton>
        <AddButton></AddButton>
        <LinkButton></LinkButton>
      </View>
      <WishListCard />
    </View>
  );
};

export default Wishlist;
