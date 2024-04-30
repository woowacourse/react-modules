const COLOR_PALETTE_KEY = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

const COLOR_PALETTE_OBJECT = {
  light: {
    background: "#ffffff",
    backgroundHighlight: "#333333",
    color: "#333333",
    colorHighlight: "#ffffff",
  },
  dark: {
    background: "#333333",
    backgroundHighlight: "#ffffff",
    color: "#ffffff",
    colorHighlight: "#333333",
  },
};

const COLOR_PALETTE = COLOR_PALETTE_OBJECT[COLOR_PALETTE_KEY];

export default COLOR_PALETTE;
