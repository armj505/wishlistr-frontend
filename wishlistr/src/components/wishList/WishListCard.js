import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import React from "react";
import { Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Title from "../ui/Title";
const WishListCard = ({ list }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <View style={styles.iconContainer}>
            <Text style={styles.icon}>
              {list.name.match(/[\p{Emoji}\u200d]+/gu)}
            </Text>
          </View>
          <View style={styles.titleText}>
            <Text style={styles.text}>
              {list.name.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]/gu, "")}
            </Text>
            <Text style={styles.textItems}>{list.items.length} items</Text>
          </View>
        </View>
        <Image source={{ uri: list.image }} style={styles.image} />
      </View>
    </TouchableOpacity>
    // <TouchableOpacity>
    //   <View
    //     style={{
    //       alignItems: "center",
    //       flexDirection: "row",
    //       height: 96,
    //       width: "100%",
    //       borderRadius: 32,
    //       overflow: "hidden",
    //       marginTop: 24,
    //     }}
    //   >
    //     <View
    //       style={{
    //         // backgroundColor: "",
    //         width: "20%",
    //         height: "100%",
    //         justifyContent: "center",
    //         alignItems: "center",
    //       }}
    //     >
    //       <View
    //         style={{
    //           width: 40,
    //           height: 40,
    //           backgroundColor: "white",
    //           borderRadius: 50,
    //           justifyContent: "center",
    //           alignItems: "center",
    //           overflow: "hidden",
    //         }}
    //       >
    //         <Text style={{ fontSize: 24 }}>🔄️</Text>
    //       </View>
    //     </View>
    //     <View
    //       style={{
    //         backgroundColor: "gold",
    //         width: "80%",
    //         height: "100%",
    //         position: "relative",
    //         zIndex: 3,
    //       }}
    //     >
    //       <View
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           position: "absolute",
    //           backgroundColor: "#ffffff88",
    //           zIndex: 2,
    //           justifyContent: "center",
    //           alignItems: "flex-start",
    //         }}
    //       >
    //         <Text
    //           style={{
    //             color: "white",
    //           }}
    //         >
    //           {list.name}
    //         </Text>
    //       </View>
    //       <Image
    //         style={{
    //           width: "100%",
    //           height: "100%",
    //           position: "absolute",
    //           zIndex: 1,
    //         }}
    //         source={{
    //           uri: list.image,
    //         }}
    //       />
    //     </View>
    //   </View>
    // </TouchableOpacity>
  );
};

export default WishListCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 96,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginBottom: 8,
    overflow: "hidden",
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "flex-end",
    borderRadius: 8,
    opacity: 0.5,
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    paddingStart: 8,
    alignItems: "center",
    gap: 8,
  },
  iconContainer: {
    justifyContent: "center",
    backgroundColor: "white",
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    overflow: "hidden",
    borderWidth: 4,
    borderColor: "#eeeeee",
  },
  icon: {
    fontSize: 32,
    padding: 0,
    right: 0,
    top: 0,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
  },
  textItems: {
    color: "#aaa",
  },
  titleText: {
    overflow: "scroll",
  },
});
