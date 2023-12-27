import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRoute, useTheme } from "@react-navigation/native";
import { getwishlistdetails } from "../../apis/wishList";
import { useQuery } from "@tanstack/react-query";

const WishlistDetails = () => {
  const theme = useTheme();

  const route = useRoute();
  const { wishlistId } = route.params;

  const { data: listdetails } = useQuery({
    queryKey: ["wishlistdetails", wishlistId],
    queryFn: () => getwishlistdetails(wishlistId),
  });

  // Extract the name from listdetails
  const wishlistName = listdetails?.name || "Loading ...."; // Replace "No Name" with a default value
  //   const wishlistItem = listdetails?.item;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          marginTop: 80,
        }}
      >
        {wishlistName}
      </Text>
      <View
        style={{
          width: "90%",
          height: 100,
          backgroundColor: "#fff",
          borderRadius: 16,
          marginBottom: 8,
          //   overflow: "hidden",
          marginTop: 80,
          //   flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: theme.colors.surface,
              flex: 8,

              //   borderTopLeftRadius: 40,
              //   borderTopRightRadius: 40,
              borderWidth: 6,
              borderStyle: "solid",
              borderColor: theme.colors.surfaceVariant,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            {/* <Text>{wishlistItem}</Text> */}
          </View>
        </View>
      </View>
    </View>
  );
};

export default WishlistDetails;

const styles = StyleSheet.create({});
