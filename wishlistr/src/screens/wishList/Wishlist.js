// // import { StyleSheet, Text, View } from "react-native";
// // import React from "react";

// // const styles = StyleSheet.create({});

// import React from "react";
// import { View, TouchableOpacity, Text } from "react-native";
// import { Button, Title } from "react-native-paper";
// import { Card } from "react-native-ui-lib";
// import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer
// import WishListCard from "../../components/wishList/WishListCard";

// const TrashButton = ({ onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: "gray",
//         padding: 30,
//         borderRadius: 5,
//       }}
//     >
//       <Icon name="trash" size={35} color="red" />
//     </TouchableOpacity>
//   );
// };

// const AddButton = ({ onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: "gray",
//         padding: 30,
//         borderRadius: 5,
//       }}
//     >
//       <Icon name="plus" size={35} color="red" />
//     </TouchableOpacity>
//   );
// };
// const LinkButton = ({ onPress }) => {
//   return (
//     <TouchableOpacity
//       style={{
//         backgroundColor: "gray",
//         padding: 30,
//         borderRadius: 5,
//       }}
//     >
//       <Icon name="link" size={35} color="red" />
//     </TouchableOpacity>
//   );
// };
// const Wishlist = () => {
//   return (
//     <View
//       style={
//         {
//           // flexDirection: "column",
//           // marginTop: "20%",
//           // padding: "10",
//         }
//       }
//     >
//       <View
//         style={{
//           width: 100,
//         }}
//       >
//         <TrashButton></TrashButton>
//         <AddButton></AddButton>
//         <LinkButton></LinkButton>
//       </View>
//       <WishListCard />
//     </View>
//   );
// };

// export default Wishlist;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "@react-navigation/native";
import Title from "../../components/ui/Title";
import WishListCard from "../../components/wishList/WishListCard";
import Screen from "../../components/ui/Screen";
import { ScrollView } from "react-native-gesture-handler";
import HeaderIcon from "../../components/ui/HeaderIcon";
import { useQuery } from "@tanstack/react-query";
import { getAllWishlist } from "../../apis/wishList";
import { getMyProfile } from "../../apis/profile";

const Wishlist = () => {
  const { colors } = useTheme();

  const { data: wishlist_ } = useQuery({
    queryKey: ["wishlist"],
    queryFn: () => getMyProfile(),
  });

  const userWishlists = wishlist_.wishLists;

  const wishlists = userWishlists?.map((list) => (
    <WishListCard list={list} key={list._id} />
  ));

  return (
    <Screen>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Title title="My Wishlists" />
        <View style={styles.iconContainer}>
          <HeaderIcon icon="add-circle" press={() => console.log("pressed")} />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>{wishlists}</ScrollView>
    </Screen>
  );
};

export default Wishlist;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
    width: "100%",
  },
  iconContainer: {
    justifyContent: "center",
    position: "absolute",
    right: 0,
    top: 8,
  },
});
