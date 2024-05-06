import {
  CloseButton,
  Footer,
  FooterButton,
  Header,
  Main,
  ModalOverlay,
  ModalWrapper,
  Title,
} from './Modal.style';
import React, { useEffect, useRef } from 'react';

export type ModalPositionType = 'center' | 'bottom';

export interface ModalButtonType {
  text: string;
  style: 'primary' | 'secondary';
  onClick: () => void;
}

export interface ModalProps {
  isOpen: boolean;
  position?: ModalPositionType;
  title: string;
  hasCloseButton?: boolean;
  children: React.ReactNode;
  footerButtons?: ModalButtonType[];
  onClose: () => void;
}

export default function Modal({
  isOpen,
  position = 'center',
  title,
  hasCloseButton = true,
  children,
  footerButtons,
  onClose,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && modalRef.current) {
      console.log('focus');
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
    <ModalOverlay onClick={onClose}>
      <ModalWrapper
        ref={modalRef}
        $position={position}
        onKeyDown={handleKeyDown}
        onClick={(event) => event.stopPropagation()}
        tabIndex={-1}
      >
        <Header>
          <Title>{title}</Title>
          {hasCloseButton && (
            <CloseButton onClick={onClose}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                  fill="black"
                />
              </svg>
            </CloseButton>
          )}
        </Header>

        <Main>{children}</Main>

        {footerButtons && (
          <Footer>
            {footerButtons.map((button, index) => {
              return (
                <FooterButton
                  key={index}
                  $style={button.style}
                  onClick={button.onClick}
                >
                  {button.text}
                </FooterButton>
              );
            })}
          </Footer>
        )}
      </ModalWrapper>
    </ModalOverlay>
  );
}
