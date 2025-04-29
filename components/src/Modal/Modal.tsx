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
  contents: React.ReactNode;
  children: React.ReactNode;
};

const ModalContext = createContext<ModalProps>({
  isOpen: true,
  title: '제목',
  onClose: () => {},
  contents: <></>,
  children: <></>,
});

const Modal = ({
  isOpen = true,
  title = '제목',
  onClose,
  contents,
  children,
}: ModalProps) => {
  const value = {
    isOpen,
    title,
    onClose,
    contents,
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
            {contents && <ModalContents>{contents}</ModalContents>}
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

const CloseButton = () => {
  const modalContext = useContext(ModalContext);

  return <CloseIcon onClick={modalContext.onClose} />;
};

// const Contents = ({ contents }) => {
//   return <ModalContents>{contents}</ModalContents>;
// };

Modal.Title = Title;
Modal.CloseButton = CloseButton;

export default Modal;
