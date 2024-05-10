import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

export const inputStyle = (theme: ThemeType) =>
  css({
    boxSizing: "border-box",
    width: "inherit",
    border: `1px solid ${COLOR_PALETTE[theme].color}`,
    borderRadius: "5px",
    color: COLOR_PALETTE[theme].color,
    backgroundColor: COLOR_PALETTE[theme].background,
    "&:focus-visible": {
      outline: "none",
    },
  });
