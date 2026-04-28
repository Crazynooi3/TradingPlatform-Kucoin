// app/api/endpoints.ts
export const ENDPOINTS = {
  auth: {
    loginWithToken: "/v1/user",
    loginWithEmail: "/v1/user",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  market: {
    list: "/market",
    detail: (symbol: string) => `/market/${symbol}`,
  },
  user: {
    profile: "/user/profile",
  },
} as const;
