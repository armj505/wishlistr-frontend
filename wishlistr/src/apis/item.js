import { instance } from ".";

const getAllItems = async () => {
  const { data } = await instance.get("/item");
  return data;
};

const getItem = async (itemId) => {
  const { data } = await instance.get(`/item/${itemId}`);
  return data;
};
const addItemToList = async (wishListId, itemId) => {
  const response = await instance.put(`/wishlist/${wishListId}/${itemId}`);
  return response.data;
};

const removeItemFromList = async (itemId, wishListId) => {
  const response = await instance.put(`/item/${itemId}/${wishListId}`);
  return response.data;
};
export { getAllItems, getItem, addItemToList, removeItemFromList };
