import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../components/ui/PrimaryButton";

const ItemDetails = ({ route }) => {
  const { item } = route.params;
  return (
    <Screen>
      {/* <Title title={item.name} /> */}
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View>
              <Image source={{ uri: item?.image }} style={styles.image} />
            </View>
          </View>
          <Text style={styles.brandText}>{item?.brand.name}</Text>
          <Text style={styles.itemTitle}>{item?.name}</Text>
          <Text style={styles.itemPrice}>{item?.price} KD</Text>
          <PrimaryButton
            name="Add to Wishlist"
            press={() => console.log("button is pressed")}
          />
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.productDetailsTitle}>Product Details</Text>
            <Text style={styles.productDetails}>{item?.description}</Text>
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
    objectFit: "contain",
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
