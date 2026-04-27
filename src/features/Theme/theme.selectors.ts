import { RootState } from "@/app/Redux/store";

export const selectThemeMode = (state: RootState) => state.themeMode.theme;
