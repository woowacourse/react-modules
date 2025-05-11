import { ReactNode, ReactElement, MouseEvent, HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  position?: 'top' | 'center' | 'bottom';
  width?: 'small' | 'medium' | 'large';
  onClose: () => void;
  children: ReactNode;
}

export interface ModalOverlayProps {
  children: ReactNode;
}

export interface ModalContainerProps {
  children: ReactNode;
}

export interface ModalTitleProps {
  children: ReactNode;
}

export interface ModalBodyProps {
  children: ReactNode;
}

export interface ModalCloseButtonProps {
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

declare module './index' {
  export interface ModalComponent extends React.FC<ModalProps> {
    Overlay: (props: ModalOverlayProps) => ReactElement;
    Container: (props: ModalContainerProps) => ReactElement;
    Title: (props: ModalTitleProps) => ReactElement;
    Body: (props: ModalBodyProps) => ReactElement;
    CloseButton: (props: ModalCloseButtonProps) => ReactElement;
  }
}
