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
  // const { data: items_ } = useQuery({
  //   queryKey: ["items"],
  //   queryFn: () => getAllItems(),
  // });
  const [expoPushToken, setExpoPushToken] = useState("");

  // const data = [{ name: "ahmad", _id: 1 }];
  const item = {
    name: "Apple iPhone 15 Pro Max 6.7-inch 512 5G Blue",
    brand: "Apple",
    image:
      "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-15-Pro-Max-256GB-Blue-Titanium_c5cd208a-a582-4a0b-9030-b484f3cfbee9.ac4fb383f6ec8f7f321ece6b4b807f48.jpeg",
    // "https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/catalog/category/mb_mobile_700x547px__O_bagfw23.jpg",

    price: "459.900 KD",
    description: "This is \n new line \n text",
  };
  // const items = item?.map((item) => <ItemCard item={item} key={item._id} />);
  console.log({ expoPushToken });
  return (
    <Screen>
      <NotificationPermission setExpoPushToken={setExpoPushToken} />
      <Title title="WishlistR" align="center" />
      <ScrollView style={styles.scrollView}>
        {<ItemCard item={item} key={item._id} />}
      </ScrollView>
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
