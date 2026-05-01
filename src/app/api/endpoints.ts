// app/api/endpoints.ts
export const ENDPOINTS = {
  auth: {
    loginWithToken: "/v1/user",
    loginWithEmail: "/v1/user",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  market: {
    list: "/v1/market",
    detail: (symbol: string) => `/market/${symbol}`,
  },
  user: {
    profile: "/user/profile",
    mainWallet: "/v1/user/wallet",
    robotWallet: "/v1/user/sub-account/wallet?type=robot",
    marginWallet: "/v1/user/sub-account/wallet?type=margin",
    cardWallet: "/v1/user/sub-account/wallet?type=card",
  },
} as const;
