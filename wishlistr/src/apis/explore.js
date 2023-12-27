import { instance } from ".";

// Brands
const getAllBrands = async () => {
  const { data } = await instance.get("/brand");
  return data;
};

const getBrandById = async (brandId) => {
  const { data } = await instance.get(`/brand/${brandId}`);
  return data;
};

// Categories
const getAllCategories = async () => {
  const { data } = await instance.get("/category");
  return data;
};

const getCategoryById = async (categoryId) => {
  const { data } = await instance.get(`/category/${categoryId}`);
  return data;
};

export { getAllBrands, getBrandById, getAllCategories, getCategoryById };
