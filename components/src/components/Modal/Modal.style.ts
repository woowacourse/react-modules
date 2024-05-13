import { css } from "@emotion/react";
import COLOR_PALETTE from "../../colorPalette";

type Position = "center" | "bottom";

const modalConditionStyle = (position: Position, width: number) => {
  if (position === "bottom") {
    return {
      marginBottom: "0",
      minWidth: "100vw",
    };
  }
  if (position === "center") {
    return {
      width: `${width}px`,
    };
  }
};

export const modalStyle = (position: Position, width: number, theme: ThemeType) =>
  css({
    padding: 0,
    border: 0,
    borderRadius: "8px",
    color: COLOR_PALETTE[theme].color,
    background: COLOR_PALETTE[theme].background,
    ...modalConditionStyle(position, width),
  });

export const modalContentStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px 32px",
  });

export const contentStyle = css({
  width: "100%",
});

export const buttonsStyle = (direction: "column" | "row") =>
  css({
    display: "flex",
    flexDirection: direction,
    justifyContent: "end",
    gap: "12px",
  });

export const ModalBottom = css({});
