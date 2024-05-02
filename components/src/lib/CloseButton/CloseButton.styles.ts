import { css } from "@emotion/react";
import COLOR_PALETTE from "../colorPalette";

export const closeButton = css({
  all: "unset",
  padding: "0",
  backgroundColor: COLOR_PALETTE.background,
  color: COLOR_PALETTE.colorHighlight,
  "&:hover": {
    cursor: "pointer",
  },
});
