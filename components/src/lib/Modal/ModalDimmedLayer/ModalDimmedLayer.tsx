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
    document.body.style.overflow = 'hidden'
    document.body.addEventListener('keydown', handleKeyDownEsc);

    return () => {
      document.body.style.overflow = 'scroll';
      document.body.removeEventListener('keydown', handleKeyDownEsc)
    }
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