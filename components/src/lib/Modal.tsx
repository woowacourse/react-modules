import { ButtonHTMLAttributes } from 'react';

type StrictPropsWithChildren<P = unknown> = P & {
  children: React.ReactNode;
};

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

interface ModalProps {
  position: 'center' | 'bottom';
}

interface ModalCloseButtonProps {
  onClose: () => void;
}

const ModalTitle = ({ children }: StrictPropsWithChildren) => {
  return <div>{children}</div>;
};

const ModalButton = ({ text, ...rest }: ModalButtonProps) => {
  return <button {...rest}>{text}</button>;
};

const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => {
  return <button onClick={onClose}>x</button>;
};

const ModalMain = ({ children }: StrictPropsWithChildren<ModalProps>) => {
  return <div>{children}</div>;
};

export const Modal = Object.assign(ModalMain, {
  Title: ModalTitle,
  Button: ModalButton,
  CloseButton: ModalCloseButton,
});
