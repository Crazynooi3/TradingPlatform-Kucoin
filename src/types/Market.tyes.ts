export interface CurrencyIdType {
  id: string;
  icon_path: string;
  name: string;
  decimal_precision: number;
  currency_name: { fa: string; en: string };
  icon: string;
}

export interface MartekType {
  id: string;
  baseCurrencyId: CurrencyIdType;
  quoteCurrencyId: CurrencyIdType;
  name: string;
  baseCurrencyPrecision: number;
  quoteCurrencyPrecision: number;
  history: string[];
  min_price: string;
  max_price: string;
  last_price: string;
  last_volume: string;
  day_change_percent: number;
  week_change_percent: number;
  tradingview_symbol: string;
  is_visible: boolean;
}

export interface MarketState {
  markets: MartekType[];
  loading: boolean;
  error: string | null;
}
