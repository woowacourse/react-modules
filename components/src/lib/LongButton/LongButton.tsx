/** @jsxImportSource @emotion/react */
import React from "react";
import { LongButtonPropsStyle } from "./LongButton.styles";

interface LongButtonProps {
  type: "cancel" | "confirm";
  handleClick?: () => void;
  children: React.ReactNode;
}

const LongButton: React.FC<LongButtonProps> = ({ type, handleClick, children }) => {
  const isHighLight = type === "confirm" ? true : false;

  return (
    <button css={LongButtonPropsStyle(isHighLight)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LongButton;
