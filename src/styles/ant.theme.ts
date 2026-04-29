import type { ThemeConfig } from "antd";
import { theme as antdTheme } from "antd";

const sharedTokens = {
  fontFamily: '"Inter", "IRANSansX", sans-serif',
  // ─── Brand colors ───────────────────────────────────────
  colorPrimary: "#00B47D", // brandgreen
  colorSuccess: "#00B47D", // success
  colorWarning: "#F8B200", // warning
  colorError: "#F65454", // error (brandred)
  colorInfo: "#3CC2FB", // babyblue
};

const sharedComponents: ThemeConfig["components"] = {
  Button: {
    // Primary → brandgreen
    colorPrimary: "#00B47D",
    colorPrimaryHover: "#00C98D",
    colorPrimaryActive: "#009B6C",
    primaryColor: "#ffffff",

    // Default
    defaultBg: "transparent",
    defaultBorderColor: "var(--kds-border)",
    defaultColor: "var(--kds-text-primary)",
    defaultHoverBg: "var(--kds-background-soft)",
    defaultHoverBorderColor: "var(--kds-border-emphasis)",
    defaultHoverColor: "var(--kds-text-primary)",

    // Danger → brandred
    colorError: "#F65454",
    colorErrorHover: "#F87070",
    colorErrorActive: "#D93E3E",

    borderRadius: 6,
    controlHeight: 36,
    paddingInline: 16,
    fontWeight: 500,
  },

  Input: {
    colorBgContainer: "var(--kds-background-soft)",
    colorBorder: "var(--kds-border)",
    colorText: "var(--kds-text-primary)",
    colorTextPlaceholder: "var(--kds-text-tertiary)",
    colorPrimaryHover: "#00B47D",
    activeBorderColor: "#00B47D",
    hoverBorderColor: "var(--kds-border-emphasis)",
    activeBg: "var(--kds-background-soft)",
    colorErrorBorder: "var(--kds-error)",
    borderRadius: 6,
    controlHeight: 36,
  },

  Select: {
    colorBgContainer: "var(--kds-background-soft)",
    colorBorder: "var(--kds-border)",
    colorText: "var(--kds-text-primary)",
    colorTextPlaceholder: "var(--kds-text-tertiary)",
    optionSelectedBg: "var(--kds-background-hover)",
    optionActiveBg: "var(--kds-background-hover)",
    colorPrimaryHover: "#00B47D",
    selectorBg: "var(--kds-background-soft)",
    borderRadius: 6,
  },

  Table: {
    colorBgContainer: "var(--kds-background)",
    headerBg: "var(--kds-background-subtle)",
    headerColor: "var(--kds-text-secondary)",
    headerSortActiveBg: "var(--kds-background-soft)",
    headerSortHoverBg: "var(--kds-background-soft)",
    rowHoverBg: "var(--kds-background-hover)",
    colorText: "var(--kds-text-primary)",
    borderColor: "var(--kds-divider)",
    footerBg: "var(--kds-background-subtle)",
    footerColor: "var(--kds-text-secondary)",
    cellPaddingBlock: 12,
    cellPaddingInline: 16,
  },

  Card: {
    colorBgContainer: "var(--kds-background)",
    colorBorderSecondary: "var(--kds-border)",
    colorText: "var(--kds-text-primary)",
    colorTextHeading: "var(--kds-text-primary)",
    colorTextDescription: "var(--kds-text-secondary)",
    paddingLG: 20,
    borderRadius: 8,
  },

  Modal: {
    contentBg: "var(--kds-background)",
    headerBg: "var(--kds-background)",
    footerBg: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    colorIcon: "var(--kds-text-secondary)",
    colorIconHover: "var(--kds-text-primary)",
    titleColor: "var(--kds-text-primary)",
    borderRadius: 8,
  },

  Drawer: {
    colorBgElevated: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    colorIcon: "var(--kds-text-secondary)",
    colorIconHover: "var(--kds-text-primary)",
  },

  Dropdown: {
    colorBgElevated: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    colorTextDisabled: "var(--kds-text-disabled)",
    controlItemBgHover: "var(--kds-background-hover)",
    controlItemBgActive: "var(--kds-background-soft)",
    borderRadius: 8,
    paddingBlock: 8,
  },

  Menu: {
    colorBgContainer: "transparent",
    colorText: "var(--kds-text-secondary)",
    colorTextDisabled: "var(--kds-text-disabled)",
    itemSelectedBg: "var(--kds-background-soft)",
    itemSelectedColor: "var(--kds-text-primary)",
    itemHoverBg: "var(--kds-background-hover)",
    itemHoverColor: "var(--kds-text-primary)",
    itemActiveBg: "var(--kds-background-soft)",
    subMenuItemBg: "transparent",
    colorActiveBarBorderSize: 2,
    itemBorderRadius: 24,
    borderRadius: 6,
    itemMarginBlock: 12,
    itemHeight: 48,
  },

  Tabs: {
    colorText: "var(--kds-text-secondary)",
    colorTextDisabled: "var(--kds-text-disabled)",
    itemSelectedColor: "var(--kds-text-primary)",
    itemHoverColor: "var(--kds-text-primary)",
    itemActiveColor: "var(--kds-text-primary)",
    inkBarColor: "#00B47D",
    cardBg: "var(--kds-background-soft)",
    cardGutter: 4,
    borderRadius: 6,
  },

  Tooltip: {
    colorBgSpotlight: "var(--kds-background-tooltip)",
    colorTextLightSolid: "#ffffff",
    borderRadius: 6,
  },

  Tag: {
    defaultBg: "var(--kds-background-soft)",
    defaultColor: "var(--kds-text-primary)",
    colorBorder: "var(--kds-border)",
    borderRadius: 4,
  },

  Badge: {
    colorBgContainer: "#F65454",
    colorError: "#F65454",
  },

  Avatar: {
    colorBgBase: "var(--kds-background-soft)",
    colorText: "var(--kds-text-primary)",
  },

  Pagination: {
    colorText: "var(--kds-text-secondary)",
    colorPrimary: "#00B47D",
    colorPrimaryHover: "#00C98D",
    itemActiveBg: "transparent",
    borderRadius: 6,
  },

  Statistic: {
    colorTextDescription: "var(--kds-text-secondary)",
    colorTextHeading: "var(--kds-text-secondary)",
    contentFontSize: 24,
  },

  Notification: {
    colorBgElevated: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    colorTextHeading: "var(--kds-text-primary)",
    colorIcon: "var(--kds-text-secondary)",
    borderRadius: 8,
    width: 360,
  },

  Message: {
    colorBgElevated: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    borderRadius: 8,
  },

  Popover: {
    colorBgElevated: "var(--kds-background)",
    colorText: "var(--kds-text-primary)",
    borderRadius: 8,
  },

  Form: {
    labelColor: "var(--kds-text-secondary)",
    colorError: "#F65454",
    colorWarning: "#F8B200",
    itemMarginBottom: 20,
  },

  DatePicker: {
    colorBgContainer: "var(--kds-background-soft)",
    colorBorder: "var(--kds-border)",
    colorText: "var(--kds-text-primary)",
    colorTextPlaceholder: "var(--kds-text-tertiary)",
    colorBgElevated: "var(--kds-background)",
    colorPrimary: "#00B47D",
    borderRadius: 6,
  },

  Switch: {
    colorPrimary: "#00B47D",
    colorPrimaryHover: "#00C98D",
    handleBg: "#ffffff",
  },

  Checkbox: {
    colorPrimary: "#00B47D",
    colorPrimaryHover: "#00C98D",
    colorBgContainer: "transparent",
    colorBorder: "var(--kds-border)",
  },

  Radio: {
    colorPrimary: "#00B47D",
    colorPrimaryHover: "#00C98D",
    colorBgContainer: "transparent",
    colorBorder: "var(--kds-border)",
    buttonSolidCheckedBg: "#00B47D",
    buttonSolidCheckedColor: "#ffffff",
    buttonCheckedBg: "var(--kds-background-soft)",
    buttonColor: "var(--kds-text-secondary)",
  },

  Slider: {
    colorPrimary: "#00B47D",
    colorPrimaryBorder: "#00B47D",
    colorPrimaryBorderHover: "#00C98D",
    trackBg: "#00B47D",
    trackHoverBg: "#00C98D",
    railBg: "var(--kds-background-soft)",
    railHoverBg: "var(--kds-background-soft)",
    handleColor: "#00B47D",
    handleActiveColor: "#00C98D",
    dotActiveBorderColor: "#00B47D",
  },

  Progress: {
    colorSuccess: "#00B47D",
    remainingColor: "var(--kds-background-soft)",
    defaultColor: "#00B47D",
  },

  Skeleton: {
    gradientFromColor: "var(--kds-background-soft)",
    gradientToColor: "var(--kds-background-hover)",
  },

  Divider: {
    colorSplit: "var(--kds-divider)",
    colorText: "var(--kds-text-tertiary)",
    orientationMargin: 0.05,
  },

  Layout: {
    headerBg: "var(--kds-background)",
    headerColor: "var(--kds-text-primary)",
    headerHeight: 60,
    footerBg: "var(--kds-background)",
    footerPadding: "16px 24px",
    siderBg: "var(--kds-background-bullet-layer)",
    bodyBg: "var(--kds-background)",
    lightSiderBg: "var(--kds-background)",
    lightTriggerBg: "var(--kds-background-soft)",
    lightTriggerColor: "var(--kds-text-primary)",
    triggerBg: "var(--kds-background-soft)",
    triggerColor: "var(--kds-text-primary)",
  },
};

// ─────────────────────────────────────────────────────────────────
// Dark Theme
// ─────────────────────────────────────────────────────────────────
export const darkTheme: ThemeConfig = {
  algorithm: antdTheme.darkAlgorithm,
  cssVar: { prefix: "kds", key: "dark" },
  hashed: false,

  token: {
    ...sharedTokens,

    // ─── Global bg/text ──────────────────────────────────
    colorBgBase: "#121212",
    colorTextBase: "#f3f3f3",

    // ─── Bg levels ───────────────────────────────────────
    colorBgContainer: "#121212",
    colorBgElevated: "#1c1c1c",
    colorBgLayout: "#0d0d0d",
    colorBgSpotlight: "#2d2d2f",
    colorBgMask: "rgba(0,0,0,0.6)",

    // ─── Text levels ─────────────────────────────────────
    colorText: "#f3f3f3",
    colorTextSecondary: "rgba(243,243,243,0.6)",
    colorTextTertiary: "rgba(243,243,243,0.48)",
    colorTextQuaternary: "rgba(243,243,243,0.3)",
    colorTextDisabled: "rgba(243,243,243,0.2)",
    colorTextHeading: "#f3f3f3",
    colorTextLabel: "rgba(243,243,243,0.6)",
    colorTextDescription: "rgba(243,243,243,0.6)",
    colorTextPlaceholder: "rgba(243,243,243,0.3)",
    colorTextLightSolid: "#ffffff",

    // ─── Border ──────────────────────────────────────────
    colorBorder: "rgba(243,243,243,0.12)",
    colorBorderSecondary: "rgba(243,243,243,0.08)",
    colorSplit: "rgba(243,243,243,0.08)",

    // ─── Fill ────────────────────────────────────────────
    colorFill: "rgba(243,243,243,0.08)",
    colorFillSecondary: "rgba(243,243,243,0.06)",
    colorFillTertiary: "rgba(243,243,243,0.04)",
    colorFillQuaternary: "rgba(243,243,243,0.02)",

    // ─── Link ────────────────────────────────────────────
    colorLink: "#00B47D",
    colorLinkHover: "#00C98D",
    colorLinkActive: "#009B6C",
  },

  components: {
    ...sharedComponents,
    Tabs: {
      colorText: "var(--kds-text-secondary)",
      colorTextDisabled: "var(--kds-text-disabled)",
      itemSelectedColor: "var(--kds-text-primary)",
      itemHoverColor: "var(--kds-text-primary)",
      itemActiveColor: "var(--kds-text-primary)",
      inkBarColor: "var(--kds-text-primary)",
      cardBg: "var(--kds-background-soft)",
      cardGutter: 4,
      borderRadius: 6,
    },
  },
};

// ─────────────────────────────────────────────────────────────────
// Light Theme
// ─────────────────────────────────────────────────────────────────
export const lightTheme: ThemeConfig = {
  algorithm: antdTheme.defaultAlgorithm,
  cssVar: { prefix: "kds", key: "light" },
  hashed: false,

  token: {
    ...sharedTokens,

    // ─── Global bg/text ──────────────────────────────────
    colorBgBase: "#ffffff",
    colorTextBase: "#1d1d1d",

    // ─── Bg levels ───────────────────────────────────────
    colorBgContainer: "#ffffff",
    colorBgElevated: "#ffffff",
    colorBgLayout: "#f9f9f9",
    colorBgSpotlight: "#2d2d2f",
    colorBgMask: "rgba(0,13,29,0.3)",

    // ─── Text levels ─────────────────────────────────────
    colorText: "#1d1d1d",
    colorTextSecondary: "rgba(29,29,29,0.6)",
    colorTextTertiary: "rgba(29,29,29,0.48)",
    colorTextQuaternary: "rgba(29,29,29,0.3)",
    colorTextDisabled: "rgba(29,29,29,0.2)",
    colorTextHeading: "#1d1d1d",
    colorTextLabel: "rgba(29,29,29,0.6)",
    colorTextDescription: "rgba(29,29,29,0.6)",
    colorTextPlaceholder: "rgba(29,29,29,0.3)",
    colorTextLightSolid: "#ffffff",

    // ─── Border ──────────────────────────────────────────
    colorBorder: "rgba(29,29,29,0.08)",
    colorBorderSecondary: "rgba(29,29,29,0.06)",
    colorSplit: "rgba(29,29,29,0.08)",

    // ─── Fill ────────────────────────────────────────────
    colorFill: "rgba(29,29,29,0.04)",
    colorFillSecondary: "rgba(29,29,29,0.03)",
    colorFillTertiary: "rgba(29,29,29,0.02)",
    colorFillQuaternary: "rgba(29,29,29,0.01)",

    // ─── Link ────────────────────────────────────────────
    colorLink: "#00B47D",
    colorLinkHover: "#00C98D",
    colorLinkActive: "#009B6C",
  },

  components: {
    ...sharedComponents,
  },
};
