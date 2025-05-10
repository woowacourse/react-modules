import AlertModal from './alertModal/AlertModal';
import ConfirmModal from './confirmModal/ConfirmModal';
import * as S from './Modal.styles';
import { useEffect, useRef } from 'react';
import PromptModal from './promptModal/PromptModal';
import { ModalProps } from '../shared/types/modal';
import { useFocusTrap } from '../shared/hooks/useFocusTrap';

const Modal = ({
  isOpen,
  onClose,
  type = 'custom',
  title = '',
  message = '',
  onConfirm,
  onSubmit,
  children,
  size = 'medium',
  position = 'center',
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  useFocusTrap(modalRef);

  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keyup', keyHandler);
    return () => window.removeEventListener('keyup', keyHandler);
  }, []);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <>
      {isOpen && (
        <S.Background onClick={handleBackgroundClick}>
          <S.ModalContainer ref={modalRef} size={size} position={position}>
            <S.HeaderSection>
              <S.Title>{title}</S.Title>
              <S.ModalCloseButton onClick={onClose}>
                <img src='./closeIcon.png' />
              </S.ModalCloseButton>
            </S.HeaderSection>
            {renderModal({ children, type, message, onClose, onConfirm, onSubmit, size })}
          </S.ModalContainer>
        </S.Background>
      )}
    </>
  );
};

const renderModal = ({ children, type, message, onClose, onConfirm, onSubmit, size }) => {
  switch (type) {
    case 'alert':
      return <AlertModal message={message} onClose={onClose} size={size} />;
    case 'confirm':
      return <ConfirmModal message={message} onClose={onClose} onConfirm={onConfirm} size={size} />;
    case 'prompt':
      return <PromptModal onClose={onClose} onSubmit={onSubmit} size={size} />;
    default:
      return <S.ModalContentSection>{children}</S.ModalContentSection>;
  }
};

export default Modal;
