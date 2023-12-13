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

const Wishlist = () => {
  const { colors } = useTheme();
  const list = [
    {
      id: 1,
      name: "🦚Ahmad's Birthday Party",
      image:
        "data:image/jpeg;base64,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",
      items: [1, 2, 3, 4],
    },
    {
      id: 2,
      name: "😍New Year's Eve",
      image:
        "data:image/jpeg;base64,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",
      items: [1, 2],
    },
  ];
  const wishlists = list?.map((list) => (
    <WishListCard list={list} key={list.id} />
  ));

  return (
    <Screen>
      <View>
        <Title title="Wishlists" />
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
});
