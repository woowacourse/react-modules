import { useEffect } from 'react';
import ModalBox from './ModalBox';
import { ModalContainer, ModalBackdrop, Container, Wrapper } from './styles/ModalStyle';
import { useModalContext } from './contexts/ModalContext';
import {
  ModalChildrenProps,
  ModalPosition,
  ModalType,
  ModalSize,
  ModalCloseType,
} from './types/modalTypes';

interface ModalProps extends ModalChildrenProps {
  modalPosition: ModalPosition;
  modalType?: ModalType;
  modalSize?: ModalSize;
  titleText?: string;
  closeType?: ModalCloseType;
}

const Modal = ({
  children,
  modalPosition,
  modalType = 'default',
  modalSize = 'medium',
  titleText = '',
  closeType = 'none',
}: ModalProps) => {
  const { isModalOpened, closeModalHandler } = useModalContext();

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
          <ModalBox
            modalPosition={modalPosition}
            modalType={modalType}
            modalSize={modalSize}
            titleText={titleText}
            closeType={closeType}
          >
            {children}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
