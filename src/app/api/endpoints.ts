// app/api/endpoints.ts
export const ENDPOINTS = {
  auth: {
    loginWithToken: "/auth/login/token",
    loginWithEmail: "/auth/login/email",
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
