import useModalBackdropClickClose from '../hooks/useModalBackdropClickClose';
import useModalEscClose from '../hooks/useModalEscClose';
import useDisableBackgroundScroll from '../hooks/useDisableBackgroundScroll';
import * as Styled from './Modal.styled';
import React, { ButtonHTMLAttributes, HTMLAttributes, useRef } from 'react';
import CloseImage from '../assets/close.png';

export interface ModalProps extends React.PropsWithChildren {
  children?: React.ReactNode;
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  size?: 'small' | 'medium' | 'large';
  style?: React.CSSProperties;
  onClose: () => void;
  onConfirm?: () => void;
}

const Modal: React.FC<ModalProps> & {
  Header: ModalHeaderType;
  Title: ModalTitleType;
  IconButton: ModalIconButtonType;
  TextButton: ModalTextButtonType;
  Content: ModalContentType;
  Input: ModalInputType;
  Footer: ModalFooterType;
} = ({ children, isOpen, onClose, position, size, ...restProps }) => {
  const modalRef = useRef(null);

  useModalEscClose(isOpen, onClose);
  useModalBackdropClickClose(isOpen, modalRef, onClose);
  useDisableBackgroundScroll(isOpen);

  if (!isOpen) return null;

  return (
    <Styled.ModalBackdrop>
      <Styled.ModalContentWrapper
        ref={modalRef}
        position={position}
        size={size}
        {...restProps}
      >
        {children}
      </Styled.ModalContentWrapper>
    </Styled.ModalBackdrop>
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
      src: string;
      imgSize?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>
  >
>;

const ModalIconButton: ModalIconButtonType = ({
  type = 'button',
  src = CloseImage,
  imgSize,
  ...restProps
}) => {
  return (
    <Styled.ModalIconButton type={type} {...restProps}>
      <img src={src} style={{ width: imgSize }} />
    </Styled.ModalIconButton>
  );
};

interface ModalTextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonWidth?: string;
  buttonHeight?: string;
  fontSize?: string;
  backgroundColor?: string;
  fontColor?: string;
}

type ModalTextButtonType = React.FC<
  React.PropsWithChildren<ModalTextButtonProps>
>;

const ModalTextButton: ModalTextButtonType = ({
  type = 'button',
  buttonWidth,
  buttonHeight,
  fontSize,
  backgroundColor,
  fontColor,
  ...restProps
}) => {
  return (
    <Styled.ModalTextButton
      type={type}
      buttonWidth={buttonWidth}
      buttonHeight={buttonHeight}
      fontSize={fontSize}
      backgroundColor={backgroundColor}
      fontColor={fontColor}
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

type ModalInputType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalInput: ModalInputType = ({ ...restProps }) => {
  return <Styled.ModalInput {...restProps}></Styled.ModalInput>;
};

type ModalFooterType = React.FC<
  React.PropsWithChildren<
    {
      buttonPosition?: 'left' | 'center' | 'right';
      buttonGap?: string;
    } & HTMLAttributes<HTMLDivElement>
  >
>;

const ModalFooter: ModalFooterType = ({
  children,
  buttonPosition,
  buttonGap,
  ...restProps
}) => {
  return (
    <Styled.ModalFooter
      buttonPosition={buttonPosition}
      buttonGap={buttonGap}
      {...restProps}
    >
      {children}
    </Styled.ModalFooter>
  );
};

Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.IconButton = ModalIconButton;
Modal.TextButton = ModalTextButton;
Modal.Content = ModalContent;
Modal.Input = ModalInput;
Modal.Footer = ModalFooter;

export default Modal;
