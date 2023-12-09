import axios from "axios";

const BASE_URL = "http://192.168.8.106:7000/api";

const instance = axios.create({
  baseURL: BASE_URL,
});

export { instance, BASE_URL };
