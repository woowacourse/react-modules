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
  title: string;
  children: React.ReactNode;
  position?: ModalPositionType;
  width?: { basicWidth: string; minWidth: string };
  hasCloseButton?: boolean;
  footerButtons?: ModalButtonInterface[];
  isClosableOnClickBackdrop?: boolean;
  zIndex?: { backdrop: number; modal: number };
  backdropOpacity?: string;
  onClose: () => void;
}

export default function Modal({
  isOpen,
  title,
  children,
  position = 'center',
  width = { basicWidth: '50%', minWidth: '300px' },
  hasCloseButton = true,
  footerButtons,
  isClosableOnClickBackdrop = true,
  zIndex = { backdrop: 999, modal: 1000 },
  backdropOpacity = '50%',
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
    <Styled.ModalPositioner>
      <Styled.ModalBackdrop
        $zIndex={zIndex.backdrop}
        $opacity={backdropOpacity}
        onClick={handleClickBackdrop}
      ></Styled.ModalBackdrop>

      <Styled.ModalWrapper
        ref={modalRef}
        $position={position}
        $width={width}
        $zIndex={zIndex.modal}
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
    </Styled.ModalPositioner>
  );
}
