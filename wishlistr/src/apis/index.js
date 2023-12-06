import axios from "axios";

const BASE_URL = "https://hammerhead-app-kz3f9.ondigitalocean.app/";
const instance = axios.create({
  baseUrl: BASE_URL,
});

instance.interceptors.request.use((config) => {
  // const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance, BASE_URL };
