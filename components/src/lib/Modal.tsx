import { useEffect } from 'react';
import ModalBox from './ModalBox';
import { ModalContainer, ModalBackdrop, Container, Wrapper } from './styles/ModalStyle';
import { useModalContext } from './contexts/ModalContext';
import { ModalChildrenProps } from './types/modalTypes';

const Modal = ({ children }: ModalChildrenProps) => {
  const { isModalOpened, closeModalHandler, modalPosition } = useModalContext();

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModalHandler();
    }
  };

  useEffect(() => {
    if (isModalOpened) {
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [closeModalHandler, isModalOpened]);

  if (!isModalOpened) return null;

  return (
    <ModalContainer modalPosition={modalPosition}>
      <ModalBackdrop onClick={closeModalHandler} />
      <Container>
        <Wrapper>
          <ModalBox>{children}</ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
