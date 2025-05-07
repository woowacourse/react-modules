import {MouseEvent, ReactNode, useEffect} from 'react';
import {
  Backdrop,
  CloseButton,
  ModalBox,
  Title,
  TopWrapper,
} from './Modal.styles';
import {IoClose} from 'react-icons/io5';
import {createPortal} from 'react-dom';
import Alert from './content/Alert';

interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

interface AlertProps {
  message: string;
  btnText: string;
}

export interface ModalProps {
  position?: 'center' | 'bottom';
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children: ReactNode;
  alert?: AlertProps;

  isOpen: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal = ({
  position = 'center',
  title,
  showCloseButton = true,
  backgroundColor,
  children,
  alert,
  isOpen,
  onClose,
  onConfirm,
}: ModalProps) => {
  const stopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    isOpen &&
    createPortal(
      <Backdrop $position={position} onClick={onClose}>
        <ModalBox
          $backgroundColor={backgroundColor}
          $position={position}
          onClick={stopPropagation}
        >
          <TopWrapper $titleText={title?.text}>
            {title && (
              <Title $color={title.color} $size={title.size}>
                {title.text}
              </Title>
            )}
            {showCloseButton && (
              <CloseButton type="button" onClick={onClose}>
                <IoClose
                  color={backgroundColor === '#000' ? '#fff' : '#000'}
                  size={30}
                />
              </CloseButton>
            )}
          </TopWrapper>
          {/* {children} */}
          {alert && (
            <Alert
              message={alert.message}
              btnText={alert.btnText}
              onConfirm={onConfirm}
            />
          )}
        </ModalBox>
      </Backdrop>,
      document.body
    )
  );
};

export default Modal;
