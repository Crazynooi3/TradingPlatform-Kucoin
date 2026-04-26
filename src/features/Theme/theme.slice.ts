import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { themeInitailState } from "./theme.initState";
import { ThemeMode } from "@/types/theme.types";

const themeSlice = createSlice({
  name: "theme",
  initialState: themeInitailState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme);
    },
    setTheme: (state, action: PayloadAction<ThemeMode>) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
