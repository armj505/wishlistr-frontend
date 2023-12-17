import axios from "axios";
import { getToken } from "./store";

const BASE_URL = "https://hammerhead-app-kz3f9.ondigitalocean.app/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { instance, BASE_URL };
