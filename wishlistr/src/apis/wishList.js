import { instance } from ".";

const getAllWishlists = async () => {
  const { data } = await instance.get("/wishlist");
  return data;
};

const createList = async (name) => {
  const { data } = await instance.post("/wishlist", {
    name,
  });

  return data;
};

const deleteWishlist = async (wishlistId) => {
  const response = await instance.delete(`/wishlist/${wishlistId}`);

  return response.data;
};
const updateListName = async (wishlistId, name) => {
  const response = await instance.put(`/wishlist/${wishlistId}`, {
    name,
  });

  return response.data;
};

const getwishlistdetails = async (wishlistId) => {
  const response = await instance.get(`/wishlist/${wishlistId}`);
  return response.data;
};

export {
  getAllWishlists,
  createList,
  deleteWishlist,
  getwishlistdetails,
  updateListName,
};
