/** @jsxImportSource @emotion/react */
import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { ButtonTextStyle, MainButtonPropsStyle } from "./MainButton.styles";
import useThemeContext from "../../hooks/useThemeContext";
import { MainButtonStyleType } from "./constants";

interface MainButtonProps extends PropsWithChildren {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  buttonType?: MainButtonStyleType;
  isHighLight?: boolean;
  handleClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  buttonType = MainButtonStyleType.Long,
  isHighLight = false,
  handleClick,
  type,
  children,
}) => {
  const theme = useThemeContext();

  return (
    <button css={MainButtonPropsStyle(isHighLight, theme, buttonType)} type={type} onClick={handleClick}>
      <div css={ButtonTextStyle}>{children}</div>
    </button>
  );
};

export default MainButton;
