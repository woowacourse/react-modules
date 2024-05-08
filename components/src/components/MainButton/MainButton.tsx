/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import { LongButtonPropsStyle } from "./MainButton.styles";
import useThemeContext from "../../hooks/useThemeContext";

export type StyleType = "Long" | "Short";

interface LongButtonProps extends PropsWithChildren {
  buttonType?: StyleType;
  isHighLight?: boolean;
  handleClick?: () => void;
}

const LongButton: React.FC<LongButtonProps> = ({ buttonType = "Long", isHighLight = false, handleClick, children }) => {
  const theme = useThemeContext();

  return (
    <button css={LongButtonPropsStyle(isHighLight, theme, buttonType)} onClick={handleClick}>
      {children}
    </button>
  );
};

export default LongButton;
