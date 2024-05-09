/** @jsxImportSource @emotion/react */
import React, { PropsWithChildren } from "react";
import { ButtonTextStyle, MainButtonPropsStyle } from "./MainButton.styles";
import useThemeContext from "../../hooks/useThemeContext";
import { MainButtonStyleType } from "./constants";

interface LongButtonProps extends PropsWithChildren {
  buttonType?: MainButtonStyleType;
  isHighLight?: boolean;
  handleClick?: () => void;
}

const MainButton: React.FC<LongButtonProps> = ({
  buttonType = MainButtonStyleType.Long,
  isHighLight = false,
  handleClick,
  children,
}) => {
  const theme = useThemeContext();

  return (
    <button css={MainButtonPropsStyle(isHighLight, theme, buttonType)} onClick={handleClick}>
      <div css={ButtonTextStyle}>{children}</div>
    </button>
  );
};

export default MainButton;
