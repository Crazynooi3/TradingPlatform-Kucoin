// app/api/interceptors/response.interceptor.ts
import { AxiosInstance } from "axios";
import { message } from "antd";

export function attachResponseInterceptor(instance: AxiosInstance) {
  instance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      const status = error.response?.status;

      if (status === 401) {
        localStorage.removeItem("token");
        window.location.href = "/auth/login";
      }

      if (status === 403) message.error("Access denied");
      if (status === 500) message.error("Server error. Try again later");

      return Promise.reject(error);
    },
  );
}
