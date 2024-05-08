import { ModalOverlay, ModalWrapper } from './Modal.style';
import React, { useEffect, useRef } from 'react';

import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';
import ModalHeader from './ModalHeader';

export type ModalPositionType = 'center' | 'bottom';
export type ModalSizeType = 'small' | 'medium' | 'large';

export interface ModalProps {
  isOpen: boolean;
  position?: ModalPositionType;
  size?: ModalSizeType;
  zIndex?: number;
  children: React.ReactNode;
  onClose: () => void;
}

function Modal({
  isOpen,
  position = 'center',
  size = 'medium',
  zIndex = 999,
  children,
  onClose,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) {
    return;
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  return (
    <ModalOverlay
      onClick={onClose}
      $zIndex={zIndex - 1}
    >
      <ModalWrapper
        $zIndex={zIndex}
        ref={modalRef}
        $position={position}
        $size={size}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
        tabIndex={-1}
      >
        {children}
      </ModalWrapper>
    </ModalOverlay>
  );
}

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
