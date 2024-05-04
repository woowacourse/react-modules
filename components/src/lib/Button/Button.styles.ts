import { css } from "@emotion/react";
import COLOR_PALETTE from "../colorPalette";

export const ButtonStyle = (isHighlight: boolean) =>
  css({
    color: isHighlight ? COLOR_PALETTE.colorHighlight : COLOR_PALETTE.color,
    fontSize: "15px",
    fontWeight: "700",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: isHighlight ? COLOR_PALETTE.backgroundHighlight : COLOR_PALETTE.background,
    border: `1px solid ${isHighlight ? COLOR_PALETTE.colorHighlight : COLOR_PALETTE.color}`,
    borderRadius: "5px",
    height: "44px",
  });
