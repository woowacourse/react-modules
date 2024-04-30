/** @jsxImportSource @emotion/react */
import React from "react";
import { LongButtonPropsStyle } from "./LongButton.styles";

interface LongButtonProps {
  type: "cancel" | "confirm";
  handleClick?: () => void;
  children: React.ReactNode;
}

const LongButton: React.FC<LongButtonProps> = ({ type, handleClick, children }) => {
  return (
    <button css={LongButtonPropsStyle} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LongButton;
