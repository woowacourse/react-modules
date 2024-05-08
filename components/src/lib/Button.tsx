import styled from "styled-components";
import { ButtonSize } from "./modalType";
import { BUTTON_COLOR } from "./constant/color";

type Style = {
  backgroundColor: string;
  backgroundHoverColor: string;
  fontColor: string;
};
interface Props {
  content: string;
  handleClick: (e: React.MouseEvent) => void;
  style?: Style;
  buttonSize: ButtonSize;
}

const getModalSize = {
  S: "5rem",
  M: "7rem",
  L: "10rem",
  MAX: "100%",
};

const Button = ({
  buttonSize,
  content = "",
  handleClick,
  style = BUTTON_COLOR.defaultButton,
}: Props) => {
  return (
    <StyledButton
      $buttonSize={buttonSize}
      $style={style}
      onClick={(e) => handleClick(e)}
    >
      {content}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  $style: Style;
  $buttonSize: ButtonSize;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.$style.backgroundColor};
  color: ${(props) => props.$style.fontColor};
  width: ${(props) =>
    props.$buttonSize ? getModalSize[props.$buttonSize] : "100%"};
  padding: 7px 0;
  border-radius: 5px;

  font-size: 16px;
  border: 1px solid #33333340;

  &:hover {
    background-color: ${(props) => props.$style.backgroundHoverColor};
  }
`;

export default Button;
