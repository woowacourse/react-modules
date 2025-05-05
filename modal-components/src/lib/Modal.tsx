import { useContext, useEffect } from 'react';
import ModalBox from './ModalBox';
import { ModalContainer, ModalBackdrop, Container, Wrapper } from './styles/ModalStyle';
import { ModalContext, useModal } from './contexts/ModalContext';
import { ModalProps } from './types/modalTypes';

const Modal = ({ modalType, titleText = '', children, closeType, onClose }: ModalProps) => {
  const context = useContext(ModalContext);
  const { closeModalHandler } = useModal();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModalHandler();
    }
  };

  useEffect(() => {
    if (context && context.isModalOpened) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [closeModalHandler, context]);

  if (!context) return null;
  const { isModalOpened } = context;
  if (!isModalOpened) return null;

  return (
    <ModalContainer modalType={modalType}>
      <ModalBackdrop onClick={closeModalHandler} />
      <Container>
        <Wrapper>
          <ModalBox
            modalType={modalType}
            titleText={titleText}
            closeType={closeType}
            onClose={onClose}
          >
            {children}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
