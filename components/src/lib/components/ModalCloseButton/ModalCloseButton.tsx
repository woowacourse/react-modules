import { StyledModalCloseButton } from "./ModalCloseButton.styled";

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return (
    <StyledModalCloseButton type="button" onClick={onClose}>
      X
    </StyledModalCloseButton>
  );
};

export default ModalCloseButton;
