import { RootState } from "@/app/Redux/store";

export const walletsSelector = (state: RootState) => state.userWallets;
export const mainWalletSelector = (state: RootState) =>
  state.userWallets.mainWallet;
export const robotWalletSelector = (state: RootState) =>
  state.userWallets.robotWallet;
export const cardWalletSelector = (state: RootState) =>
  state.userWallets.cardWallet;
export const marginWalletSelector = (state: RootState) =>
  state.userWallets.marginWallet;
