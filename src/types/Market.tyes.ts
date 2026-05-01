export interface MartekType {
  id: string;
  symbol: string;
  baseCurrencyId: string;
  quoteCurrencyId: string;
  price: string;
  minPrice24h: string;
  maxPrice24h: string;
  volume24h: string;
  price24h: string;
  baseCurrencyPrecision: number;
  quoteCurrencyPrecision: number;
  tvSymbol: string;
  isVisible: boolean;
  status: string;
  listedAt: string;
  marketIcon: string | null;
  delistedAt: string | null;
}

export interface MarketState {
  markets: MartekType[];
  loading: boolean;
  error: string | null;
}
