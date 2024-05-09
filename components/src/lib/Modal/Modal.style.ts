import { css } from "@emotion/react";
import COLOR_PALETTE from "../colorPalette";

type Position = "center" | "bottom";
type Size = "small" | "medium" | "large";

const sizeConverter = {
  small: "200px",
  medium: "400px",
  large: "600px",
};

const modalConditionStyle = (position: Position) => {
  if (position === "bottom") {
    return {
      marginBottom: "0",
      minWidth: "100vw",
    };
  }
  if (position === "center") {
    return {
      width: "242px",
    };
  }
};

export const modalStyle = (position: Position, size: Size) =>
  css({
    padding: 0,
    border: 0,
    borderRadius: "8px",
    background: COLOR_PALETTE.background,
    ...modalConditionStyle(position),
    width: sizeConverter[size],
    height: sizeConverter[size],
  });

export const modalContentStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px 32px",
  });

export const buttonsStyle = css({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

export const inputStyle = css({
  height: "30px",
  border: "1px solid #dfe1e5",
  borderRadius: "24px",
  padding: "10px",
});
