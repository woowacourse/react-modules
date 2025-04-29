import styled from 'styled-components';
import closeIcon from './assets/close-icon.png';
import { useContext, useEffect } from 'react';
import { createContext } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  showCloseButton?: boolean;
  children: React.ReactNode;
};

const ModalContext = createContext<ModalProps>({
  isOpen: true,
  title: '제목',
  onClose: () => {},
  showCloseButton: true,
  children: <></>,
});

const Modal = ({
  isOpen = true,
  title = '제목',
  onClose,
  showCloseButton = true,
  children,
}: ModalProps) => {
  const value = {
    isOpen,
    title,
    onClose,
    showCloseButton,
    children,
  };
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <ModalContext.Provider value={value}>
          <BackDrop onClick={onClose} />
          <ModalLayout>
            {children}
            {showCloseButton && <CloseIcon onClick={onClose} />}
          </ModalLayout>
        </ModalContext.Provider>
      )}
    </>
  );
};

const Title = () => {
  const modalContext = useContext(ModalContext);

  return <ModalTitle>{modalContext.title}</ModalTitle>;
};

Modal.Title = Title;

export default Modal;

const BackDrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalLayout = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  z-index: 500;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const CloseIcon = styled.img.attrs({
  src: closeIcon,
  alt: 'Close Icon',
})`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ModalTitle = styled.div`
  font-size: 24px;
  font-weight: 900;
  position: relative;
  top: 10px;
  left: 10px;
  text-align: start;
`;
