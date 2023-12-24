import { instance } from ".";

const getAllWishlist = async () => {
  const { data } = await instance.get("/wishlist");
  return data;
};

const createList = async ({ listTitle, listIcon }) => {
  const formData = new FormData();
  formData.append("listTitle", listTitle);
  formData.append("listIcon", listIcon);
  const { data } = await instance.post(formData);

  return data;
};

const deleteWishlist = async (wishlistId) => {
  const { data } = await instance.delete(`/wishlist/${wishlistId}`);
  return data;
};

export { getAllWishlist };
