import { StyledModalOverlay } from "./ModalOverlay.styled";

interface ModalOverlayProps {
  onClose: () => void;
}

const ModalOverlay = ({ onClose }: ModalOverlayProps) => {
  return <StyledModalOverlay onClick={onClose} />;
};

export default ModalOverlay;
