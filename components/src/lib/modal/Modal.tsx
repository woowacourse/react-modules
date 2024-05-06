import useModalBackdropClickClose from '../hooks/useModalBackdropClickClose';
import useModalEscClose from '../hooks/useModalEscClose';
import useDisableBackgroundScroll from '../hooks/useDisableBackgroundScroll';
import * as Styled from './Modal.styled';
import React, { HTMLAttributes, CSSProperties, useRef } from 'react';
import CloseImage from '../../assets/close.png';

export interface ModalProps extends React.PropsWithChildren {
  children?: React.ReactNode;
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  style?: CSSProperties;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> & {
  Header: ModalHeaderType;
  Title: ModalTitleType;
  IconButton: ModalIconButtonType;
  TextButton: ModalTextButtonType;
  Content: ModalContentType;
  Footer: ModalFooterType;
} = ({ children, isOpen, onClose, position, ...restProps }) => {
  const modalRef = useRef(null);

  useModalEscClose(isOpen, onClose);
  useModalBackdropClickClose(isOpen, modalRef, onClose);
  useDisableBackgroundScroll(isOpen);

  if (!isOpen) return null;

  return (
    <>
      <Styled.ModalBackdrop>
        <Styled.ModalContentWrapper
          ref={modalRef}
          $position={position}
          {...restProps}
        >
          {children}
        </Styled.ModalContentWrapper>
      </Styled.ModalBackdrop>
    </>
  );
};

type ModalHeaderType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalHeader: ModalHeaderType = ({ children, ...restProps }) => {
  return <Styled.ModalHeader {...restProps}>{children}</Styled.ModalHeader>;
};

type ModalTitleType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLSpanElement>>
>;

const ModalTitle: ModalTitleType = ({ children, ...restProps }) => {
  return <Styled.ModalTitle {...restProps}>{children}</Styled.ModalTitle>;
};

type ModalIconButtonType = React.FC<
  React.PropsWithChildren<
    {
      onClose: () => void;
      src: string;
      imgSize?: string;
    } & HTMLAttributes<HTMLButtonElement>
  >
>;

const ModalIconButton: ModalIconButtonType = ({
  onClose,
  src,
  imgSize,
  ...restProps
}) => {
  return (
    <Styled.ModalIconButton onClick={onClose} {...restProps}>
      <img src={src || CloseImage} style={{ width: imgSize }} />
    </Styled.ModalIconButton>
  );
};

type ModalTextButtonType = React.FC<
  React.PropsWithChildren<
    {
      onClose: () => void;
      buttonSize?: string;
      fontSize?: string;
    } & HTMLAttributes<HTMLButtonElement>
  >
>;

const ModalTextButton: ModalTextButtonType = ({
  onClose,
  buttonSize,
  fontSize,
  ...restProps
}) => {
  return (
    <Styled.ModalTextButton
      onClick={onClose}
      buttonSize={buttonSize}
      fontSize={fontSize}
      {...restProps}
    ></Styled.ModalTextButton>
  );
};

type ModalContentType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalContent: ModalContentType = ({ children, ...restProps }) => {
  return <Styled.ModalContent {...restProps}>{children}</Styled.ModalContent>;
};

type ModalFooterType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>;

const ModalFooter: ModalFooterType = ({ children, ...restProps }) => {
  return <footer {...restProps}>{children}</footer>;
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.IconButton = ModalIconButton;
Modal.TextButton = ModalTextButton;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;

export default Modal;
