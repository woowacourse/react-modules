import { css } from "@emotion/react";

type Position = "center" | "bottom";

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

export const modalStyle = (position: Position) =>
  css({
    padding: 0,
    border: 0,
    borderRadius: "8px",
    ...modalConditionStyle(position),
  });

export const modalContentStyle = () =>
  css({
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    padding: "24px 32px",
  });

export const ModalBottom = css({});
