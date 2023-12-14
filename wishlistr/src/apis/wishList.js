import { instance } from ".";

const getAllWishlists = async () => {
  const { data } = await instance.get("/api/wishlist");
  return data;
};

const createList = async (info) => {
  const { data } = await instance.post("/api/wishlist", info);

  return data;
};

const deleteWishlist = async (wishlistId) => {
  const { data } = await instance.delete(`/wishlist/${wishlistId}`);
  return data;
};

export { getAllWishlists, createList, deleteWishlist };
