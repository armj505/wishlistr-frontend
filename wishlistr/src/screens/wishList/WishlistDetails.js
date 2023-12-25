import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute, useTheme } from "@react-navigation/native";
import {
  deleteWishlist,
  getwishlistdetails,
  updateListName,
} from "../../apis/wishList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Divider } from "react-native-paper"; // Import Menu and Divider from react-native-paper
import kebab from "../../../assets/blackDots.png";
import shirt from "../../../assets/st2.jpg";
import cancel from "../../../assets/b-cancel.png";
import { LinearGradient } from "expo-linear-gradient";
import ROUTES from "../../navigations";
import { Share } from "react-native";

const WishlistDetails = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [listName, setListName] = useState("");
  const [isEditing, setEditing] = useState(false);
  const [editedListName, setEditedListName] = useState("");
  const theme = useTheme();
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

  useEffect(() => {
    setListName(listdetails?.name || "wait...");
    setEditedListName(listdetails?.name || "");
  }, [listdetails]);

  const handleListNamePress = () => {
    setEditing(true);
  };

  const handleListNameChange = (text) => {
    setEditedListName(text);
  };
  const handleListNameSubmit = () => {
    updateList();
  };
  ////////////////////////////////////////
  const handleShare = () => {
    closeMenu();

    const deepLink = `https://hammerhead-app-kz3f9.ondigitalocean.app/WishlistDetails?wishlistId=${wishlistId}`;
    const shareMessage = `Check out my wishlist: ${deepLink}`;

    Share.share({
      message: shareMessage,
    }).catch((error) =>
      console.error("Error sharing wishlist:", error.message)
    );
  };

  ///////////////////////////////////////

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LinearGradient
        colors={["#edff00ee", "#ffffff00"]}
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
            <View
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
                <TouchableOpacity>
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
                  // backgroundColor: "yellow",
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
                      source={shirt}
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
                    Black T-shirt
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Brand: xxx
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    Vendor: xxx
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default WishlistDetails;

const styles = StyleSheet.create({});
