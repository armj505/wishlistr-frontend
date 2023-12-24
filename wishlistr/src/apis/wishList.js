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
  console.log("hereeee");
  const { data } = await instance.delete(`/wishlist/${wishlistId}`);
  console.log(data);
  return data;
};

const getwishlistdetails = async (wishlistId) => {
  const response = await instance.get(`/wishlist/${wishlistId}`);
  return response.data;
};

export { getAllWishlists, createList, deleteWishlist, getwishlistdetails };
