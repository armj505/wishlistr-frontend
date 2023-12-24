// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import React, { useState } from "react";
// import {
//   View,
//   Modal,
//   TextInput,
//   Button,
//   StyleSheet,
//   Pressable,
// } from "react-native";
// import { createList } from "../../apis/wishList";
// import { TouchableOpacity } from "react-native-gesture-handler";
// import { Text } from "react-native-paper";

// const MyModal = ({ visible, onClose, onSubmit }) => {
//   const [inputText, setInputText] = useState("");
//   const queryClient = useQueryClient();
//   const { mutate: createWishList } = useMutation({
//     mutationFn: () => {
//       return createList({ name: inputText });
//     },
//     onSuccess: () => {
//       onClose();
//       queryClient.invalidateQueries(["wishList"]);
//     },
//   });
//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <View style={styles.modalContainer}>
//         <View style={styles.modalContent}>
//           <TextInput
//             style={{
//               width: "200%",
//               height: "15%",
//               borderWidth: 1,
//               // borderRadius: 10,
//               paddingHorizontal: 15,
//             }}
//             // style={styles.input}
//             placeholder="Name Your WishList"
//             onChangeText={(text) => setInputText(text)}
//           />
//           <View style={styles.button}>
//             <TouchableOpacity
//               style={{
//                 backgroundColor: "green",
//                 paddingVertical: 5,
//                 paddingHorizontal: 10,
//                 elevation: 5,
//               }}
//               onPress={() => createWishList()}
//             >
//               {/* <Button title="Submit" onPress={() => createWishList()} />
//               <Button title="Close" onPress={onClose} /> */}
//               <Text style={{ color: "gold" }}>Submit</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               onPress={onClose}
//               style={{
//                 backgroundColor: "green",
//                 paddingVertical: 5,
//                 paddingHorizontal: 10,
//               }}
//             >
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   modalContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",

//     backgroundColor: "#00000099",
//   },
//   modalContent: {
//     backgroundColor: "white",
//     paddingHorizontal: 40,
//     borderRadius: 7,
//     elevation: 5,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     height: 20,
//     borderColor: "gray",
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   button: {
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 6,
//     paddingHorizontal: 32,
//     // borderRadius: 4,
//     elevation: 3,
//     gap: 6,
//     // backgroundColor: "black",
//   },
// });

// export default MyModal;
