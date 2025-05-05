import { StyledModalOverlay } from "./ModalOverlay.styled";

import { ModalOverlayProps } from "./ModalOverlay.types";

const ModalOverlay = ({ onClose }: ModalOverlayProps) => {
  return <StyledModalOverlay onClick={onClose} />;
};

export default ModalOverlay;
