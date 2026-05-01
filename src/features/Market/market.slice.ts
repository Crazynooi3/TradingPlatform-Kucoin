import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { marketInitialState } from "./market.initState";
import { MartekType } from "@/types/Market.tyes";
import axiosInstance from "@/app/api/axiosInstance";
import { ENDPOINTS } from "@/app/api/endpoints";

export const fetchMarkets = createAsyncThunk<
  MartekType[],
  void,
  { rejectValue: string }
>("markets/fetchMarkets", async (_, { rejectWithValue }) => {
  try {
    const response = (await axiosInstance.get(
      ENDPOINTS.market.list,
    )) as MartekType[];

    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

const marketSlicer = createSlice({
  name: "markets",
  initialState: marketInitialState,
  reducers: {
    clearMarkets: (state) => {
      state.markets = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMarkets.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMarkets.fulfilled, (state, action) => {
      state.markets = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchMarkets.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearMarkets } = marketSlicer.actions;
export default marketSlicer.reducer;
