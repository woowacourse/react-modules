import {
  BackDrop,
  ModalLayout,
  CloseIcon,
  ModalTitle,
  ModalContents,
} from './Modal.styled';
import { useContext, useEffect } from 'react';
import { createContext } from 'react';

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalContext = createContext<ModalProps>({
  isOpen: true,
  title: '제목',
  onClose: () => {},
  children: <></>,
});

const Modal = ({
  isOpen = true,
  title = '제목',
  onClose,
  children,
}: ModalProps) => {
  const value = {
    isOpen,
    title,
    onClose,
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
          <ModalLayout>{children}</ModalLayout>
        </ModalContext.Provider>
      )}
    </>
  );
};

const Title = () => {
  const modalContext = useContext(ModalContext);

  return <ModalTitle>{modalContext.title}</ModalTitle>;
};

const CloseButton = () => {
  const modalContext = useContext(ModalContext);

  return <CloseIcon onClick={modalContext.onClose} />;
};

interface ModalContentsProps {
  children: React.ReactNode;
}

const Contents = ({ children }: ModalContentsProps) => {
  return <ModalContents>{children}</ModalContents>;
};

Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Contents = Contents;

export default Modal;
