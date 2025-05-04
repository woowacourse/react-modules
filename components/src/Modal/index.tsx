import {
  BackDrop,
  ModalLayout,
  CloseIcon,
  ModalTitle,
  ModalContents,
  ModalButton,
  ModalButtonContainer,
} from './Modal.styled';
import { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { createPortal } from 'react-dom';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom';
};

const ModalContext = createContext<ModalProps>({
  isOpen: true,
  onClose: () => {},
  children: <></>,
  position: 'center',
});

const Modal = ({
  isOpen = true,
  onClose,
  children,
  position = 'center',
}: ModalProps) => {
  const value = {
    isOpen,
    onClose,
    children,
    position,
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
      {isOpen &&
        createPortal(
          <ModalContext.Provider value={value}>
            <BackDrop onClick={onClose} $position={position}>
              <ModalLayout
                $position={position}
                onClick={(event) => event.stopPropagation()}
              >
                {children}
              </ModalLayout>
            </BackDrop>
          </ModalContext.Provider>,
          document.getElementById('root') as HTMLElement
        )}
    </>
  );
};

interface ModalTitleProps {
  title: string;
}

const Title = ({ title }: ModalTitleProps) => {
  return <ModalTitle>{title}</ModalTitle>;
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

type ButtonProps = {
  title: string;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
};

const Button = ({
  title,
  backgroundColor,
  textColor,
  size,
  onClick,
}: ButtonProps) => {
  return (
    <ModalButtonContainer>
      <ModalButton
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        $size={size}
        onClick={onClick}
      >
        {title}
      </ModalButton>
    </ModalButtonContainer>
  );
};

Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Contents = Contents;
Modal.Button = Button;

export default Modal;
