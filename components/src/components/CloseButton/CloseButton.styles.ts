import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

export const closeButton = (theme: ThemeType) =>
  css({
    all: "unset",
    padding: "0",
    backgroundColor: COLOR_PALETTE[theme].background,
    color: COLOR_PALETTE[theme].colorHighlight,
    "&:hover": {
      cursor: "pointer",
    },
  });
