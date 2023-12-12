import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../components/ui/PrimaryButton";

const ItemDetails = () => {
  const item = {
    name: "Apple iPhone 15 Pro Max 6.7-inch 512 5G Blue",
    brand: "Apple",
    image:
      "https://i5.walmartimages.com/seo/AT-T-Apple-iPhone-15-Pro-Max-256GB-Blue-Titanium_c5cd208a-a582-4a0b-9030-b484f3cfbee9.ac4fb383f6ec8f7f321ece6b4b807f48.jpeg",
    // "https://cdn.obag.filoblu.com/media/contentmanager/content/resized/767x/catalog/category/mb_mobile_700x547px__O_bagfw23.jpg",

    price: "459.900 KD",
    description: "This is \n new line \n text",
  };
  return (
    <Screen>
      <Title title={item.name} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
          </View>
          <Text style={styles.brandText}>{item.brand}</Text>
          <Text style={styles.itemTitle}>{item.name}</Text>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <PrimaryButton
            name="Add to Wishlist"
            press={() => console.log("button is pressed")}
          />
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.productDetailsTitle}>Product Details</Text>
            <Text style={styles.productDetails}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 8,
    width: "100%",
  },
  container: {
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    borderRadius: 16,
    overflow: "hidden",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  imageContainer: {
    width: "100%",
    height: 360,
    // borderWidth: 1,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  brandText: {
    paddingTop: 8,
    fontSize: 16,
    // fontWeight: "bold",
    color: "#888",
  },
  itemTitle: {
    // paddingTop: 0,
    fontSize: 24,
    fontWeight: "bold",
  },
  itemPrice: {
    paddingTop: 8,
    fontSize: 16,
    color: "#888",
    paddingBottom: 16,
  },
  itemDescriptionContainer: {
    backgroundColor: "#eee",
    padding: 8,
    borderRadius: 8,
    marginTop: 16,
  },
  productDetailsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 16,
  },
});
