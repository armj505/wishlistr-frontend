import { instance } from ".";

// Brands
const getAllBrands = async () => {
  const { data } = await instance.get("/api/brand");
  return data;
};

const getBrandById = async (brandId) => {
  const { data } = await instance.get(`/api/brand/${brandId}`);
  return data;
};

// Categories
const getAllCategories = async () => {
  const { data } = await instance.get("/api/category");
  return data;
};

const getCategoryById = async (categoryId) => {
  const { data } = await instance.get(`/api/category/${categoryId}`);
  return data;
};

export { getAllBrands, getBrandById, getAllCategories, getCategoryById };
