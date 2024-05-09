enum DefaultColor {
  VeryDarkGray = "#2f3542",
  DarkGray = "#57606f",
  MediumGray = "#747d8c",
  BrightGray = "#a4b0be",
  VeryBrightGray = "#ced6e0",

  SmokeWhite = "#dfe4ea",
  MediumWhite = "#ffffff",

  DarkHighlight = "#3742fa",
  MediumHighlight = "#70a1ff",
}

const COLOR_PALETTE = {
  light: {
    background: DefaultColor.MediumWhite,
    backgroundHighlight: DefaultColor.SmokeWhite,
    backgroundReverse: DefaultColor.VeryDarkGray,
    color: DefaultColor.VeryDarkGray,
    colorHighlight: DefaultColor.DarkGray,
    colorReverse: DefaultColor.MediumWhite,
  },
  dark: {
    background: DefaultColor.VeryDarkGray,
    backgroundHighlight: DefaultColor.DarkGray,
    backgroundReverse: DefaultColor.MediumWhite,
    color: DefaultColor.MediumWhite,
    colorHighlight: DefaultColor.SmokeWhite,
    colorReverse: DefaultColor.VeryDarkGray,
  },
};

export default COLOR_PALETTE;
