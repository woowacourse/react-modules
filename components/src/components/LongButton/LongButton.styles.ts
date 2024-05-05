import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

export const LongButtonPropsStyle = (isHighlight: boolean, theme: ThemeType) =>
  css({
    width: "100%",
    color: isHighlight ? COLOR_PALETTE[theme].colorHighlight : COLOR_PALETTE[theme].color,
    fontSize: "15px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: isHighlight ? COLOR_PALETTE[theme].backgroundHighlight : COLOR_PALETTE[theme].background,
    border: `1px solid ${isHighlight ? COLOR_PALETTE[theme].colorHighlight : COLOR_PALETTE[theme].color}`,
    borderRadius: "5px",
    height: "44px",
    "&:hover": {
      cursor: "pointer",
    },
  });
