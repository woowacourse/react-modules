import { MouseEventHandler } from "react";
import { ButtonWrapper } from "./CloseButton.style";

interface CloseButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const CloseButton: React.FC<React.PropsWithChildren<CloseButtonProps>> = ({
  children,
  onClick,
}) => {
  return <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>;
};

export default CloseButton;
