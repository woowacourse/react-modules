/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import { LongButtonPropsStyle } from "./LongButton.styles";

interface LongButtonProps extends PropsWithChildren {
  type: "cancel" | "confirm";
  handleClick?: () => void;
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
