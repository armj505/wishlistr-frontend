import { instance } from ".";

const getAllItems = async () => {
  const { data } = instance.get("/api/item");
  return data;
};

const getItem = async (itemId) => {
  const { data } = instance.get(`/api/item/${itemId}`);
  return data;
};

export { getAllItems, getItem };
