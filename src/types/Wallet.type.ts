// types/Wallet.type.ts

export interface Networktype {
  default: boolean;
  deposit_enabled: boolean;
  deposit_manual_wallet_refresh: boolean;
  minimum_withdraw_amount: string;
  name: string;
  withdraw_enabled: boolean;
  withdraw_fee: string;
}

export interface Currencytype {
  id: string;
  name: string;
  color: string;
  decimal_precision: number;
  icon_path: string;
  networks: Networktype[];
}

export interface WalletItem {
  balance: string;
  blocked_balance: string;
  currency: Currencytype;
}

export interface MarginWalletType {
  balance: string;
  blockedBalance: string;
  closePositionBlockedBalance: string;
  collateral: string;
  collateralPendingClosePosition: string;
  liability: string;
  positionBlockedBalance: string;
  currency: { id: string };
}

export interface RobotWalletType {
  balance: string;
  currency: { id: string };
}

export interface CardWalletType {
  balance: string;
  currency: { id: string };
}

export interface WalletState {
  mainWallet: WalletItem[];
  marginWallet: MarginWalletType[];
  robotWallet: RobotWalletType[];
  cardWallet: CardWalletType[];
  loading: boolean;
  error: string | null;
}
