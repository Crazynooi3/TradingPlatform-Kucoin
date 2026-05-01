import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { walletInitialState } from "./wallet.initState";
import {
  CardWalletType,
  MarginWalletType,
  RobotWalletType,
  WalletItem,
} from "@/types/Wallet.type";
import axiosInstance from "@/app/api/axiosInstance";
import { ENDPOINTS } from "@/app/api/endpoints";

const getToken = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});

export const fetchMainWallet = createAsyncThunk<
  WalletItem[],
  void,
  { rejectValue: string }
>("wallet/fetchMainWallet", async (_, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(
      ENDPOINTS.user.mainWallet,
      getToken(),
    )) as WalletItem[];
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

export const fetchMarginWallet = createAsyncThunk<
  MarginWalletType[],
  void,
  { rejectValue: string }
>("wallet/fetchMarginWallet", async (_, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(
      ENDPOINTS.user.marginWallet,
      getToken(),
    )) as MarginWalletType[];
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

export const fetchRobotWallet = createAsyncThunk<
  RobotWalletType[],
  void,
  { rejectValue: string }
>("wallet/fetchRobotWallet", async (_, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(
      ENDPOINTS.user.robotWallet,
      getToken(),
    )) as RobotWalletType[];
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

export const fetchCardWallet = createAsyncThunk<
  CardWalletType[],
  void,
  { rejectValue: string }
>("wallet/fetchCardWallet", async (_, { rejectWithValue }) => {
  try {
    return (await axiosInstance.get(
      ENDPOINTS.user.cardWallet,
      getToken(),
    )) as CardWalletType[];
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

const handleAsyncCases = <T>(
  builder: any,
  thunk: any,
  stateKey: keyof typeof walletInitialState,
) => {
  builder
    .addCase(thunk.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(thunk.fulfilled, (state: any, action: any) => {
      state[stateKey] = action.payload;
      state.loading = false;
    })
    .addCase(thunk.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.payload;
    });
};

const walletSlice = createSlice({
  name: "userWallet",
  initialState: walletInitialState,
  reducers: {
    clearWallet: () => walletInitialState,
  },
  extraReducers: (builder) => {
    handleAsyncCases(builder, fetchMainWallet, "mainWallet");
    handleAsyncCases(builder, fetchMarginWallet, "marginWallet");
    handleAsyncCases(builder, fetchRobotWallet, "robotWallet");
    handleAsyncCases(builder, fetchCardWallet, "cardWallet");
  },
});

export const { clearWallet } = walletSlice.actions;
export default walletSlice.reducer;
