import * as S from './Modal.styles';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  handleCloseModal: () => void;
  children: React.ReactNode;
  title: string;
  position: 'center' | 'bottom';
}

const Modal = ({ isOpen, handleCloseModal, title, children, position = 'center' }: ModalProps) => {
  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseModal();
      }
    };

    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <S.Background onClick={handleCloseModal}>
          <S.ModalContainer position={position}>
            <S.HeaderSection>
              <S.Title>{title}</S.Title>
              <S.ModalCloseButton onClick={handleCloseModal}>
                <img src='./closeIcon.png' />
              </S.ModalCloseButton>
            </S.HeaderSection>

            <S.ModalContent>{children}</S.ModalContent>
          </S.ModalContainer>
        </S.Background>
      )}
    </>
  );
};

export default Modal;
