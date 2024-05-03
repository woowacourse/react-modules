import { MouseEventHandler } from "react";
import { ButtonWrapper } from "./CloseButton.style";

interface CloseButtonProps {
  children: React.ReactElement | string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<CloseButtonProps> = ({ children, onClick }) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default CloseButton;
