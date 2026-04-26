import { ThemeMode } from "@/types/theme.types";

const createInitState = (): ThemeMode => {
  if (typeof window !== "undefined") {
    const sevedTheme = localStorage.getItem("theme") as ThemeMode | null;
    if (sevedTheme) return sevedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }
  return "light";
};

export const themeInitailState = {
  theme: createInitState(),
};
