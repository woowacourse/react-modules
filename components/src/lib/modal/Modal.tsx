import useModalBackdropClickClose from '../hooks/useModalBackdropClickClose';
import useModalEscClose from '../hooks/useModalEscClose';
import useDisableBackgroundScroll from '../hooks/useDisableBackgroundScroll';
import * as Styled from './Modal.styled';
import React, { ButtonHTMLAttributes, HTMLAttributes, useRef } from 'react';
import CloseImage from '../../assets/close.png';

export interface ModalProps
  extends React.PropsWithChildren,
    Pick<HTMLAttributes<HTMLElement>, 'style'> {
  children?: React.ReactNode;
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  size?: 'small' | 'medium' | 'large';
  onClose: () => void;
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
      actionFn: () => void;
      src: string;
      imgSize?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>
  >
>;

const ModalIconButton: ModalIconButtonType = ({
  actionFn,
  type = 'button',
  src = CloseImage,
  imgSize,
  ...restProps
}) => {
  return (
    <Styled.ModalIconButton type={type} onClick={actionFn} {...restProps}>
      <img src={src} style={{ width: imgSize }} />
    </Styled.ModalIconButton>
  );
};

type ModalTextButtonType = React.FC<
  React.PropsWithChildren<
    {
      actionFn: () => void;
      buttonSize?: string;
      fontSize?: string;
      backgroundColor?: string;
      fontColor?: string;
    } & ButtonHTMLAttributes<HTMLButtonElement>
  >
>;

const ModalTextButton: ModalTextButtonType = ({
  actionFn,
  type = 'button',
  buttonSize,
  fontSize,
  backgroundColor,
  fontColor,
  ...restProps
}) => {
  return (
    <Styled.ModalTextButton
      type={type}
      onClick={actionFn}
      buttonSize={buttonSize}
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
