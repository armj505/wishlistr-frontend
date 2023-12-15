import axios from "axios";
import * as SecureStore from "expo-secure-store";

const BASE_URL = "https://hammerhead-app-kz3f9.ondigitalocean.app/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  async (config) => {
    try {
      const token = await SecureStore.getItemAsync("token");
      if (token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${token}`,
        };
      }
    } catch (error) {
      console.error("SecureStore error:", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance, BASE_URL };
