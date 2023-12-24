import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import ItemCard from "../../components/ui/ItemCard";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../../apis/item";
import NotificationExample from "../../components/notification/CreateNotification";
import NotificationPermission from "../../components/notification/RequestPermissions";

const Home = () => {
  const { data: items_ } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });
  console.log(items_);
  const [expoPushToken, setExpoPushToken] = useState("");

  itemat = [
    {
      name: "something",
      _id: 1,
      image: "https://m.media-amazon.com/images/I/81LdJRVFxEL.jpg",
      price: 24,
      brand: { name: "acer" },
    },
  ];

  const items = itemat?.map((item) => <ItemCard item={item} key={item._id} />);

  console.log({ expoPushToken });
  return (
    <Screen>
      <NotificationPermission setExpoPushToken={setExpoPushToken} />
      {/* <Title title="WishlistR" align="center" /> */}
      <ScrollView style={styles.scrollView}>{items}</ScrollView>
    </Screen>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
    width: "100%",
  },
});
