import styled from '@emotion/styled';
import {
  Fragment,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
} from 'react';
import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  contents: ReactNode;
  buttons: ReactElement<typeof PrimaryButton | typeof SecondaryButton>[];
  showCloseButton?: boolean;
  position?: 'center' | 'bottom';
}

function Modal({
  title,
  isOpen,
  onClose,
  contents,
  buttons,
  position = 'center',
  showCloseButton = true,
}: ModalProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      modalRef.current?.showModal();
    } else {
      modalRef.current?.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && event.target === modalRef.current) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    buttons.forEach((button, idx) => {
      if (
        !isValidElement(button) ||
        (button.type !== PrimaryButton && button.type !== SecondaryButton)
      ) {
        throw new Error(
          `Modal: buttons[${idx}]는 PrimaryButton 또는 SecondaryButton이어야 합니다.`
        );
      }
    });
  }, [buttons]);

  return (
    <ModalContainer
      onClose={onClose}
      isBottom={position === 'bottom'}
      ref={modalRef}
    >
      <ModalWrapper isBottom={position === 'bottom'}>
        <ModalHeader>
          <Title>{title}</Title>
          {showCloseButton && (
            <CloseButton type="button" onClick={onClose}>
              <img src="./close-button.png" alt="모달 닫기 버튼" />
            </CloseButton>
          )}
        </ModalHeader>
        {contents}
        <ButtonWrapper>
          {buttons.map((buttonComponent, index) => (
            <Fragment key={index}>{buttonComponent}</Fragment>
          ))}
        </ButtonWrapper>
      </ModalWrapper>
    </ModalContainer>
  );
}

const ModalContainer = styled.dialog<{ isBottom: boolean }>`
  box-sizing: border-box;
  min-width: 400px;
  padding: 24px 32px;

  border: none;
  border-radius: 8px;

  margin-bottom: ${(props) => (props.isBottom ? 0 : null)};
  width: ${(props) => (props.isBottom ? '100%' : null)};
  max-width: ${(props) => (props.isBottom ? '100%' : null)};
  border-bottom-left-radius: ${(props) => (props.isBottom ? 0 : null)};
  border-bottom-right-radius: ${(props) => (props.isBottom ? 0 : null)};

  &::backdrop {
    background-color: #000000;
    opacity: 0.35;
  }

  @media (max-width: 600px) {
    width: ${(props) => (props.isBottom ? '100%' : 'calc(100vw - 72px)')};
  }
`;

const ModalWrapper = styled.div<{ isBottom: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.isBottom ? '16px' : '24px')};
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h2`
  margin: 0;
  justify-self: flex-start;
  font-size: 24px;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export default Modal;
