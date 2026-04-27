import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "@/features/Theme/theme.slice";

export const store = configureStore({
  reducer: {
    themeMode: themeReducer,
  },
});

export type AppStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
