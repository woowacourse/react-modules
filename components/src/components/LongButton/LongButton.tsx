/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import { LongButtonPropsStyle } from "./LongButton.styles";
import useThemeContext from "../../hooks/useThemeContext";

interface LongButtonProps extends PropsWithChildren {
  isHighLight?: boolean;
  handleClick?: () => void;
}

const LongButton: React.FC<LongButtonProps> = ({ isHighLight = false, handleClick, children }) => {
  const theme = useThemeContext();

  return (
    <button css={LongButtonPropsStyle(isHighLight, theme)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LongButton;
