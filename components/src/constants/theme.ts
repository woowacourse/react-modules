export const MODAL_COLORS = {
  BLACK: "#000",
  WHITE: "#fff",
  LIGHT_GRAY: "#33333340",
  DARK_GRAY: "#333333BF",
} as const;

export const THEME_MAP = {
  light: {
    background: MODAL_COLORS.WHITE,
    title: MODAL_COLORS.BLACK,
    icon: MODAL_COLORS.BLACK,
  },
  dark: {
    background: MODAL_COLORS.BLACK,
    title: MODAL_COLORS.WHITE,
    icon: MODAL_COLORS.WHITE,
  },
} as const;

export const BUTTON_COLOR_MAP = {
  primary: {
    background: MODAL_COLORS.BLACK,
    text: MODAL_COLORS.WHITE,
    border: MODAL_COLORS.WHITE,
  },
  secondary: {
    background: MODAL_COLORS.WHITE,
    text: MODAL_COLORS.DARK_GRAY,
    border: MODAL_COLORS.LIGHT_GRAY,
  },
} as const;

export type ThemeMode = "light" | "dark";
export type ButtonVarient = "primary" | "secondary";
export type ModalColor = (typeof MODAL_COLORS)[keyof typeof MODAL_COLORS];
