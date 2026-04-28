// features/Auth/api/auth.api.ts
import axiosInstance from "@/app/api/axiosInstance";
import { ENDPOINTS } from "@/app/api/endpoints";

export const authApi = {
  loginWithToken: (token: string) =>
    axiosInstance.get(ENDPOINTS.auth.loginWithToken, {
      headers:{
        Authorization:`Bearer ${token}`
      }
    }),

  loginWithEmail: (identifier: string) =>
    axiosInstance.post(ENDPOINTS.auth.loginWithEmail, { identifier }),

  logout: () =>
    axiosInstance.post(ENDPOINTS.auth.logout),
};