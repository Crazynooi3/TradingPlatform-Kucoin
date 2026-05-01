import { WalletState } from "@/types/Wallet.type";

export const walletInitialState: WalletState = {
  mainWallet: [],
  marginWallet: [],
  robotWallet: [],
  cardWallet: [],
  loading: false,
  error: null,
};
