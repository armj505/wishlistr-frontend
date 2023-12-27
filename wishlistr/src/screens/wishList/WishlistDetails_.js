import React, { useEffect, useState } from "react";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import {
  deleteWishlist,
  getwishlistdetails,
  updateListName,
} from "../../apis/wishList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Divider } from "react-native-paper";
import kebab from "../../../assets/blackDots.png";
import empty from "../../../assets/Empty-cuate.png";
import cancel from "../../../assets/b-cancel.png";
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ROUTES from "../../navigations";
import { Share } from "react-native";
import { removeItemFromList } from "../../apis/item";

const WishlistDetails = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [listName, setListName] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editedListName, setEditedListName] = useState("");
  const [selectedItemId, setSelectedItemId] = useState(null);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const query = useQueryClient();
  const route = useRoute();
  const { wishlistId } = route.params;

  const { data: listdetails } = useQuery({
    queryKey: ["wishlistdetails", wishlistId],
    queryFn: () => getwishlistdetails(wishlistId),
  });

  const openMenu = () => setMenuVisible(true);
  const closeMenu = () => setMenuVisible(false);

  const { mutate: deleteList } = useMutation({
    mutationKey: ["deleteList"],
    mutationFn: () => deleteWishlist(wishlistId),
    onSuccess: () => {
      navigation.navigate(ROUTES.WISHLIST.WISHLIST.WISHLIST);
      query.invalidateQueries("wishaList");
    },
  });

  const { mutate: updateList } = useMutation({
    mutationKey: ["updateList"],
    mutationFn: () => updateListName(wishlistId, editedListName),
    onSuccess: () => {
      setEditing(false);
      query.invalidateQueries("wishlistdetails");
    },
  });

  const { mutate: removeItem } = useMutation({
    mutationKey: ["removeItem"],
    mutationFn: () => removeItemFromList(selectedItemId, wishlistId),
    onSuccess: () => {
      query.invalidateQueries("wishlistdetails");
    },
  });

  useEffect(() => {
    setListName(listdetails?.name || "wait...");
    setEditedListName(listdetails?.name || "");
  }, [listdetails]);

  const handleRemoveItem = (itemId) => {
    if (itemId) {
      Alert.alert(
        "Confirm Remove",
        "Are you sure you want to remove this item?",
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "OK",
            onPress: async () => {
              console.log("Selected Item ID:", itemId);
              setSelectedItemId(itemId);
              await removeItem();
              setSelectedItemId(null);
            },
          },
        ],
        { cancelable: false }
      );
    }
  };
  const handleListNamePress = () => {
    setEditing(true);
  };

  const handleListNameChange = (text) => {
    setEditedListName(text);
  };
  const handleListNameSubmit = () => {
    updateList();
  };

  const handleShare = () => {
    closeMenu();

    const deepLink = `https://hammerhead-app-kz3f9.ondigitalocean.app/SharedWishList/${wishlistId}`;
    const shareMessage = `Check out my wishlist: ${deepLink}`;

    Share.share({
      message: shareMessage,
    })
      .then(() => {
        Linking.openURL(deepLink);
      })
      .catch((error) =>
        console.error("Error sharing wishlist:", error.message)
      );
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={[`${colors.primary}`, "#ffffff00"]}
        style={{
          width: "100%",
          flex: 1.5,
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {isEditing ? (
          <TextInput
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 24,
              marginTop: 16,
            }}
            value={editedListName}
            onChangeText={handleListNameChange}
            onBlur={handleListNameSubmit}
            autoFocus
          />
        ) : (
          <TouchableOpacity onPress={handleListNamePress}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                marginLeft: 24,
                marginTop: 16,
              }}
            >
              {listName}
            </Text>
          </TouchableOpacity>
        )}
        <Menu
          visible={isMenuVisible}
          onDismiss={closeMenu}
          anchor={
            <TouchableOpacity onPress={openMenu}>
              <Image
                source={kebab}
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />
            </TouchableOpacity>
          }
        >
          <Menu.Item
            title="Share"
            leadingIcon={"share"}
            onPress={handleShare}
          />

          <Menu.Item
            onPress={deleteList}
            title="Delete"
            leadingIcon={"delete"}
            titleStyle={{ color: "red" }}
          />
          <Divider />
          <Menu.Item onPress={closeMenu} title="Close" leadingIcon={"close"} />
        </Menu>
      </LinearGradient>
      <View
        style={{
          flex: 8.5,
        }}
      >
        <ScrollView
          style={{
            width: "100%",
            height: 400,
          }}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
        >
          <View
            style={{
              width: "100%",
              height: "auto",
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 10,
            }}
          >
            {listdetails?.items.length === 0 ? (
              <View
                style={{
                  width: "100%",
                  height: 600,
                  alignItems: "center",
                }}
              >
                <Image
                  source={empty}
                  style={{
                    width: 450,
                    height: 450,
                    marginTop: 24,
                  }}
                />
                <Text style={{ fontSize: 16 }}>Your wishList is empty!</Text>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#8a8b8a",
                    paddingVertical: 10,
                    marginTop: 10,
                    width: 250,
                    alignItems: "center",
                    borderRadius: 16,
                    elevation: 16,
                  }}
                  onPress={() => navigation.navigate(ROUTES.HOME.HOME.HOME)}
                >
                  <Text
                    style={{ fontSize: 18, fontWeight: "bold", color: "white" }}
                  >
                    Click to add items
                  </Text>
                </TouchableOpacity>
              </View>
            ) : (
              listdetails?.items.map((item) => (
                <View
                  key={item._id}
                  style={{
                    width: "90%",
                    height: 170,
                    backgroundColor: "white",
                    borderRadius: 20,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: 20,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleRemoveItem(item?.item?._id)}
                    >
                      <Image
                        source={cancel}
                        style={{
                          width: 24,
                          height: 24,
                          marginRight: 4,
                          alignSelf: "flex-end",
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: 145,
                      alignItems: "center",
                      flexDirection: "row",
                      gap: 35,
                    }}
                  >
                    <View
                      style={{
                        width: 140,
                        height: 140,
                        borderRadius: 20,
                        marginLeft: 10,
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 10,
                      }}
                    >
                      <TouchableOpacity>
                        <Image
                          source={{ uri: item?.item?.image }}
                          style={{
                            width: 140,
                            height: 140,
                            borderRadius: 20,
                          }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        width: "40%",
                        height: 120,
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                        }}
                      >
                        name: {item?.item?.name}
                      </Text>
                      {/* <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        Brand: {item?.item?.brand}
                      </Text> */}
                      <Text
                        style={{
                          fontSize: 15,
                          fontWeight: "bold",
                          marginTop: 10,
                        }}
                      >
                        price: {item?.item?.price} KD
                      </Text>
                    </View>
                  </View>
                </View>
              ))
            )}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WishlistDetails;

const styles = StyleSheet.create({});
