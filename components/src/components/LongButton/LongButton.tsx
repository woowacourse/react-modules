/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import { LongButtonPropsStyle } from "./LongButton.styles";
import useThemeContext from "../../hooks/useThemeContext";

interface LongButtonProps extends PropsWithChildren {
  type: "cancel" | "confirm";
  handleClick?: () => void;
}

const LongButton: React.FC<LongButtonProps> = ({ type, handleClick, children }) => {
  const isHighLight = type === "confirm" ? true : false;
  const theme = useThemeContext();

  return (
    <button css={LongButtonPropsStyle(isHighLight, theme)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LongButton;
