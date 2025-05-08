export const MODAL_COLORS = {
  BLACK: "#000",
  WHITE: "#fff",
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

export type ThemeMode = "light" | "dark";
export type ModalColor = (typeof MODAL_COLORS)[keyof typeof MODAL_COLORS];
