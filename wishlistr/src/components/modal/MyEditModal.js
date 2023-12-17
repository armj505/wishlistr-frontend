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
// import { deleteWishlist } from "../../apis/wishList";

// const MyEditModal = ({ visible, onClose, onSubmit }) => {
//   const [text, setText] = useState("");
//   const queryClient = useQueryClient();
//   const { mutate: deleteWishList } = useMutation({
//     mutationFn: () => {
//       return deleteWishlist();
//     },
//     // onSuccess: () => {
//     //   onClose();
//     //   queryClient.invalidateQueries(["wishaList"]);
//     // },
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
//             placeholder="Change wishlist name"
//             onChangeText={(text) => setText(text)}
//           />
//           <View>
//             <Pressable style={styles.button}>
//               <Button title="Delete" onPress={() => deleteWishList()} />
//               <Button title="Close" onPress={onClose} />
//             </Pressable>
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
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 4,
//     elevation: 3,
//     backgroundColor: "black",
//   },
// });

// export default MyEditModal;
