import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const CreateWishlist = () => {
  const [listTitle, setWishTitle] = useState("");
  const [listIcon, setListIcon] = useState("");
  const [selected, setSelected] = useState([]);

  const queryClient = useQueryClient();
  const wishlists = selected?.map((select) => {
    return select.value;
  });
  const { mutate: addList } = useMutation({
    mutationFn: () => {},
  });
};
export default CreateWishlist;
