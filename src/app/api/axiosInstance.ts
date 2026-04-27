// app/api/axiosInstance.ts
import axios from "axios";
import { attachRequestInterceptor } from "./interceptors/request.interceptor";
import { attachResponseInterceptor } from "./interceptors/response.interceptor";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

attachRequestInterceptor(axiosInstance);
attachResponseInterceptor(axiosInstance);

export default axiosInstance;
