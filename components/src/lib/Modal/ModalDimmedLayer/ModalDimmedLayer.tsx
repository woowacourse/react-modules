import { useEffect } from "react";
import { StyledDimmedLayer } from "./ModalDimmedLayer.styled";

interface ModalDimmedLayerProps {
  onClick: () => void;
  isOpened: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ModalDimmedLayer = ({ onClick, isOpened, onClose, children }: ModalDimmedLayerProps) => {
  useEffect(() => {
    if (isOpened) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
    document.body.addEventListener('keydown', handleKeyDownEsc);
    return document.body.removeEventListener('keydown', handleKeyDownEsc);
  }, [isOpened])

  const handleKeyDownEsc = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpened) {
      onClose();
    }
  };

  return (
    <StyledDimmedLayer onClick={onClick}>
      {children}
    </StyledDimmedLayer>
  )
}

export default ModalDimmedLayer