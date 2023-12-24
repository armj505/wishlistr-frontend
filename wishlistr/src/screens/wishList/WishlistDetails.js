import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute, useTheme } from "@react-navigation/native";
import { getwishlistdetails } from "../../apis/wishList";
import { useQuery } from "@tanstack/react-query";
import { Icon } from "react-native-paper";
import arrow from "../../../assets/arrow.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import kebab from "../../../assets/kebab.png";
import cancel from "../../../assets/cancel.png";
import gift from "../../../assets/gift-128.png";

const WishlistDetails = () => {
  const theme = useTheme();

  const route = useRoute();
  const { wishlistId } = route.params;

  const { data: listdetails } = useQuery({
    queryKey: ["wishlistdetails", wishlistId],
    queryFn: () => getwishlistdetails(wishlistId),
  });

  const wishlistName = listdetails?.name || "Loading ...."; // Replace "No Name" with a default value

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "navy",
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "navy",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Image
            source={arrow}
            style={{ marginTop: 10, width: 35, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={kebab}
            style={{ marginTop: 10, width: 35, height: 25, marginLeft: 10 }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 9,
          backgroundColor: "white",
          borderTopLeftRadius: 100,
          borderWidth: 5,
          borderColor: "silver",
        }}
      >
        <View
          style={{
            width: "100%",
            // backgroundColor: "pink",
            marginTop: 15,
            height: 50,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginLeft: 50,
              marginTop: 10,
            }}
          >
            {wishlistName}
          </Text>
        </View>
        <ScrollView
          style={{
            width: "100%",
            height: 400,
            // backgroundColor: "green",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "auto",

              justifyContent: "space-evenly",
              alignItems: "center",
              gap: 10,
              paddingTop: 50,
            }}
          >
            <View
              style={{
                width: "90%",
                height: 170,
                backgroundColor: "gray",
                borderRadius: 20,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: "100%",
                  // backgroundColor: "red",
                  height: 20,
                }}
              >
                <TouchableOpacity>
                  <Image
                    source={cancel}
                    style={{
                      marginTop: 10,
                      width: 12,
                      height: 12,
                      marginRight: 10,
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
                    width: "45%",
                    // backgroundColor: "pink",
                    height: 120,
                    borderRadius: 12,
                    marginLeft: 10,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <TouchableOpacity>
                    <Image
                      source={gift}
                      style={{
                        width: 100,
                        height: 100,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Omar Nora Ahmed
                </Text>
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
