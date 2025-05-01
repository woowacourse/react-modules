import { StyledModalCloseButton } from "./ModalCloseButton.styled";

import { ModalCloseButtonProps } from "./ModalCloseButton.types";

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <StyledModalCloseButton type="button" onClick={onClose}>
      X
    </StyledModalCloseButton>
  );
};

export default ModalCloseButton;
