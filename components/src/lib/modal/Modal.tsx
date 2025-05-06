import AlertModal from './alertModal/AlertModal';
import ConfirmModal from './confirmModal/ConfirmModal';
import * as S from './Modal.styles';
import { useEffect } from 'react';
import PromptModal from './promptModal/PromptModal';
import { ModalProps } from '../shared/types/modal';

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
          <S.ModalContainer size={size} position={position}>
            <S.HeaderSection>
              <S.Title>{title}</S.Title>
              <S.ModalCloseButton onClick={onClose}>
                <img src='./closeIcon.png' />
              </S.ModalCloseButton>
            </S.HeaderSection>
            {type === 'custom' && <S.ModalContentSection>{children}</S.ModalContentSection>}
            {type === 'alert' && <AlertModal message={message} onClose={onClose} size={size} />}
            {type === 'confirm' && (
              <ConfirmModal message={message} onClose={onClose} onConfirm={onConfirm} size={size} />
            )}
            {type === 'prompt' && <PromptModal onClose={onClose} onSubmit={onSubmit} size={size} />}
          </S.ModalContainer>
        </S.Background>
      )}
    </>
  );
};

export default Modal;
