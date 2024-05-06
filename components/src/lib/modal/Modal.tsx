import useModalEscClose from '../hooks/useModalEscClose';
import * as Styled from './Modal.styled';
import { HTMLAttributes, CSSProperties, useEffect } from 'react';

export interface ModalProps extends React.PropsWithChildren {
  children?: React.ReactNode;
  isOpen: boolean;
  position: 'top' | 'bottom' | 'center';
  style?: CSSProperties;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> & {
  ModalHeader: ModalHeaderType;
  ModalTitle: ModalTitleType;
  ModalCloseButton: ModalCloseButtonType;
  ModalContent: ModalContentType;
  ModalFooter: ModalFooterType;
} = ({ children, isOpen, onClose, position, ...restProps }) => {
  if (!isOpen) return null;

  useModalEscClose(isOpen, onClose);

  return (
    <>
      <Styled.ModalBackdrop>
        <Styled.ModalContentWrapper position={position} {...restProps}>
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
  return <span {...restProps}>{children}</span>;
};

type ModalCloseButtonType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLButtonElement>>
>;

const ModalCloseButton: ModalCloseButtonType = ({ children, ...restProps }) => {
  return <button {...restProps}>{children}</button>;
};

type ModalContentType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLElement>>
>;

const ModalContent: ModalContentType = ({ children, ...restProps }) => {
  return <section {...restProps}>{children}</section>;
};

type ModalFooterType = React.FC<
  React.PropsWithChildren<HTMLAttributes<HTMLDivElement>>
>;

const ModalFooter: ModalFooterType = ({ children, ...restProps }) => {
  return <footer {...restProps}>{children}</footer>;
};

Modal.ModalHeader = ModalHeader;
Modal.ModalTitle = ModalTitle;
Modal.ModalCloseButton = ModalCloseButton;
Modal.ModalContent = ModalContent;
Modal.ModalFooter = ModalFooter;

export default Modal;
