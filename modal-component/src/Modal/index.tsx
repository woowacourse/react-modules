import {
  BackDrop,
  ModalLayout,
  CloseIcon,
  ModalTitle,
  ModalContents,
  ModalButton,
  ModalButtonContainer,
  ModalInput,
} from './Modal.styled';
import { useEffect } from 'react';
import { createContext } from 'react';
import { createPortal } from 'react-dom';
import useModalContext from './hooks/useModalContext';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
};

export const ModalContext = createContext<ModalProps | null>(null);

const Modal = ({
  isOpen = true,
  onClose,
  children,
  position = 'center',
  size = 'small',
}: ModalProps) => {
  const value: ModalProps = {
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
  }, [onClose]);

  return (
    <>
      {isOpen &&
        createPortal(
          <ModalContext.Provider value={value}>
            <BackDrop onClick={onClose} $position={position}>
              <ModalLayout
                $position={position}
                $size={size}
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
  const modalContext = useModalContext();

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
  border?: string;
};

const Button = ({
  title,
  backgroundColor,
  textColor,
  size,
  border,
  onClick,
}: ButtonProps) => {
  return (
    <ModalButtonContainer>
      <ModalButton
        $backgroundColor={backgroundColor}
        $textColor={textColor}
        $size={size}
        $border={border}
        onClick={onClick}
      >
        {title}
      </ModalButton>
    </ModalButtonContainer>
  );
};

const Input = ({ placeholder }) => {
  return <ModalInput placeholder={placeholder} />;
};

Modal.Title = Title;
Modal.CloseButton = CloseButton;
Modal.Contents = Contents;
Modal.Button = Button;
Modal.Input = Input;

export default Modal;
