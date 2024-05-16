import styled from "styled-components";
import { BUTTON_COLOR } from "../constant/color";
import { ButtonSize, ButtonType } from "./modalType";

export interface ButtonProps {
  onClick: (e: React.MouseEvent) => void;
  buttonSize?: ButtonSize;

  backgroundColor?: string;
  backgroundHoverColor?: string;
  fontColor?: string;
  content?: string;

  type?: ButtonType;
}

const getButtonSize = {
  S: "5rem",
  M: "7rem",
  L: "10rem",
  MAX: "100%",
};

const ModalButton = ({
  onClick,
  buttonSize = "L",
  backgroundColor = BUTTON_COLOR.defaultButton.backgroundColor,
  backgroundHoverColor = BUTTON_COLOR.defaultButton.backgroundHoverColor,
  fontColor = BUTTON_COLOR.defaultButton.fontColor,
  content = "확인",
  type = "button",
}: ButtonProps) => {
  return (
    <StyledButton
      $buttonSize={buttonSize}
      $backgroundColor={backgroundColor}
      $backgroundHoverColor={backgroundHoverColor}
      $fontColor={fontColor}
      onClick={(e) => onClick(e)}
      type={type}
    >
      {content}
    </StyledButton>
  );
};
const StyledButton = styled.button<{
  $backgroundColor: string;
  $fontColor: string;
  $buttonSize: ButtonSize;
  $backgroundHoverColor: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$fontColor};
  width: ${(props) => getButtonSize[props.$buttonSize]};
  padding: 7px 0;
  border-radius: 5px;

  font-size: 16px;
  border: 1px solid #33333340;

  &:hover {
    background-color: ${(props) => props.$backgroundHoverColor};
  }
`;

export default ModalButton;
