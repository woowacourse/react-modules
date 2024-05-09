import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

export const closeButton = (theme: ThemeType) =>
  css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
    borderRadius: "100%",
    backgroundColor: COLOR_PALETTE[theme].background,
    color: COLOR_PALETTE[theme].colorHighlight,
  });
