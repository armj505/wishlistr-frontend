import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Screen from "../../components/ui/Screen";
import Title from "../../components/ui/Title";
import { ScrollView } from "react-native-gesture-handler";
import PrimaryButton from "../../components/ui/PrimaryButton";
import Modal from "react-native-modal";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyProfile } from "../../apis/profile";
import { getAllWishlists } from "../../apis/wishList";
import { addItemToList } from "../../apis/item";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "../../navigations";

const ItemDetails = ({ route }) => {
  const query = useQueryClient();
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedWishlist, setSelectedWishlist] = useState(null);
  const [selectedWishlistId, setSelectedWishlistId] = useState(null);
  const { data: myLists, isLoading } = useQuery({
    queryKey: ["myLists"],
    queryFn: () => getAllWishlists(),
  });
  const { mutate: addToList } = useMutation({
    mutationKey: ["addToList"],
    mutationFn: () => addItemToList(selectedWishlist._id, item._id),
    onSuccess: () => {
      Toast.show({
        type: "success",
        text1: "The Item has been added",
        visibilityTime: 2000,
      });
      navigation.navigate(ROUTES.HOME.HOME.HOME);
      query.invalidateQueries("wishlists");
    },
  });

  if (isLoading) {
    return (
      <View>
        <Text>Fetching wishLists data</Text>
      </View>
    );
  }

  const { item } = route.params;

  return (
    <Screen>
      <Title title={item?.name} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <View>
              <Image source={{ uri: item?.image }} style={styles.image} />
            </View>
          </View>
          <Text style={styles.brandText}>{item?.brand?.name}</Text>
          <Text style={styles.itemTitle}>{item?.name}</Text>
          <Text style={styles.itemPrice}>{item?.price} KD</Text>
          <PrimaryButton
            name="Add to Wishlist"
            press={() => setModalVisible(true)}
          />
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.productDetailsTitle}>Product Details</Text>
            <Text style={styles.productDetails}>{item.description}</Text>
          </View>
        </View>
      </ScrollView>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Choose a Wishlist</Text>
          {myLists?.map((oneList) => (
            <TouchableOpacity
              key={oneList._id}
              onPress={() => {
                setSelectedWishlist(oneList);
                setSelectedWishlistId(oneList._id);
              }}
              style={[
                styles.listItem,
                selectedWishlistId === oneList._id && styles.selectedListItem,
              ]}
            >
              <Text
                style={[
                  styles.listItemText,
                  selectedWishlistId === oneList._id &&
                    styles.selectedListItemText,
                ]}
              >
                {oneList.name}
              </Text>
            </TouchableOpacity>
          ))}
          <View style={styles.modalButtons}>
            <TouchableOpacity
              onPress={() => {
                if (selectedWishlist) {
                  addToList();
                }
                setModalVisible(false);
              }}
              style={styles.addButton}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    color: "#888",
  },
  itemTitle: {
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
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    height: 250,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listItemText: {
    fontSize: 16,
  },
  selectedListItem: {
    backgroundColor: "#eee",
  },
  selectedListItemText: {
    color: "blue",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  addButton: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
  },
  cancelButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },
});
