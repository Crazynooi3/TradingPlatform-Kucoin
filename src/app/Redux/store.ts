import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/features/Theme/theme.slice";
import userReducer from "@/features/User/user.slice";

export const store = configureStore({
  reducer: {
    themeMode: themeReducer,
    user: userReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
