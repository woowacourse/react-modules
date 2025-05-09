import {MouseEvent, ReactNode, useEffect} from 'react';
import {
  Backdrop,
  CloseButton,
  ModalContainer,
  Title,
  TopWrapper,
} from './Modal.styles';
import {IoClose} from 'react-icons/io5';
import {createPortal} from 'react-dom';
import Alert from './content/Alert';
import Confirm from './content/Confirm';
import Prompt from './content/Prompt';

interface TitleProps {
  text?: string;
  color?: string;
  size?: number;
}

interface MessageProps {
  message: string;
}

export interface ModalProps {
  position?: 'center' | 'bottom';
  size?: 'small' | 'medium' | 'large';
  title?: TitleProps;
  showCloseButton?: boolean;
  backgroundColor?: string;
  children?: ReactNode;

  alert?: MessageProps;
  confirm?: MessageProps;
  prompt?: boolean | MessageProps;

  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (value?: string) => void;
}

type ModalHeaderProps = Pick<
  ModalProps,
  'title' | 'showCloseButton' | 'onClose' | 'backgroundColor'
>;

type ModalContentProps = Pick<
  ModalProps,
  'children' | 'alert' | 'confirm' | 'prompt' | 'onConfirm' | 'onClose'
>;

const ModalHeader = ({
  title,
  showCloseButton,
  onClose,
  backgroundColor,
}: ModalHeaderProps) => {
  return (
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
  );
};

const ModalContent = ({
  children,
  alert,
  confirm,
  prompt,
  onConfirm,
  onClose,
}: ModalContentProps) => {
  return (
    <>
      {children}
      {alert && <Alert message={alert.message} onConfirm={onConfirm} />}
      {confirm && (
        <Confirm
          message={confirm.message}
          onConfirm={onConfirm}
          onClose={onClose}
        />
      )}
      {prompt && (
        <Prompt
          message={(prompt as MessageProps).message}
          onConfirm={onConfirm}
          onClose={onClose}
        />
      )}
    </>
  );
};

const Modal = ({
  position = 'center',
  size,
  title,
  showCloseButton = true,
  backgroundColor,
  children,
  alert,
  confirm,
  prompt,
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
        <ModalContainer
          $backgroundColor={backgroundColor}
          $position={position}
          $size={size}
          onClick={stopPropagation}
        >
          <ModalHeader
            title={title}
            showCloseButton={showCloseButton}
            onClose={onClose}
            backgroundColor={backgroundColor}
          />
          <ModalContent
            children={children}
            alert={alert}
            confirm={confirm}
            prompt={prompt}
            onConfirm={onConfirm}
            onClose={onClose}
          />
        </ModalContainer>
      </Backdrop>,
      document.body
    )
  );
};

export default Modal;
