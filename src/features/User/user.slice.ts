import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userInitialState } from "./user.initState";
import axiosInstance from "@/app/api/axiosInstance";
import { ENDPOINTS } from "@/app/api/endpoints";
import { UserInfoTypes } from "@/types/UserInfo.type";

export const fetchUserInfo = createAsyncThunk<
  UserInfoTypes,
  string,
  { rejectValue: string }
>("user/fetchUserInfo", async (token, { rejectWithValue }) => {
  try {
    const response = (await axiosInstance.get(ENDPOINTS.auth.loginWithToken, {
      headers: { Authorization: `Bearer ${token}` },
    })) as UserInfoTypes;

    return response;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

export const rehydrateUser = createAsyncThunk<
  UserInfoTypes,
  void,
  { rejectValue: string }
>("user/rehydrateUser", async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) return rejectWithValue("No token found");

    return (await axiosInstance.get(ENDPOINTS.auth.loginWithToken, {
      headers: { Authorization: `Bearer ${token}` },
    })) as UserInfoTypes;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Failed");
  }
});

const userSlice = createSlice({
  name: "userInfo",
  initialState: userInitialState,
  reducers: {
    clearUser: (state) => {
      state.userInfo = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(fetchUserInfo.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(rehydrateUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.loading = false;
    });
    builder.addCase(rehydrateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(rehydrateUser.rejected, (state) => {
      state.loading = false;
      state.userInfo = null;
      localStorage.removeItem("token"); // token نامعتبره، پاکش کن
    });
  },
});

export const { clearUser } = userSlice.actions;
export default userSlice.reducer;
