import { ThemeMode } from "@/types/theme.types";

const VALID_THEMES: ThemeMode[] = ["light", "dark"];

const createInitState = (): ThemeMode => {
  try {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as ThemeMode | null;

      if (savedTheme && VALID_THEMES.includes(savedTheme)) {
        return savedTheme;
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
  } catch (e) {
    console.warn("Could not read theme from localStorage", e);
  }

  return "light";
};

export const themeInitailState = {
  theme: createInitState(),
};
