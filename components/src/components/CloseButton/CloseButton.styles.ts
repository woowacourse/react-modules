import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

export const closeButton = (theme: ThemeType) =>
  css({
    all: "unset",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLOR_PALETTE[theme].background,
    color: COLOR_PALETTE[theme].colorHighlight,
    transition: "0.2s all ease",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: COLOR_PALETTE[theme].backgroundHighlight,
    },
  });
