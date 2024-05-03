import React, { useRef, useEffect } from 'react';

import ModalHeader from './ModalHeader/ModalHeader';
import ModalContent from './ModalContent/ModalContent';
import ModalFooter from './ModalFooter/ModalFooter';

import * as Styled from './Modal.style';

export type ModalPositionType = 'center' | 'bottom';
export type ModalButtonType = 'primary' | 'secondary';

export interface ModalButtonInterface {
  text: string;
  style: ModalButtonType;
  onClick: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  position?: ModalPositionType;
  title: string;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  footerButtons?: ModalButtonInterface[];
  isClosableOnClickBackdrop?: boolean;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  position = 'center',
  title,
  hasCloseButton = true,
  children,
  footerButtons,
  isClosableOnClickBackdrop = true,
  onClose,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef) {
      modalRef.current?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return;

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  const handleClickBackdrop = () => {
    if (isClosableOnClickBackdrop) {
      onClose();
    }
  };

  return (
    <Styled.ModalBackdrop onClick={handleClickBackdrop}>
      <Styled.ModalWrapper
        ref={modalRef}
        $position={position}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
        tabIndex={0}
      >
        <ModalHeader
          title={title}
          hasCloseButton={hasCloseButton}
          onClose={onClose}
        />

        <ModalContent>{children}</ModalContent>

        {footerButtons && <ModalFooter bottons={footerButtons} />}
      </Styled.ModalWrapper>
    </Styled.ModalBackdrop>
  );
}
