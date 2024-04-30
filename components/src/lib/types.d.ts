type ModalType = 'center' | 'bottom';

interface ModalProps extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  type: ModalType;
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
}

interface BasicModalProps extends Omit<ModalProps, 'type'> {}

interface ModalComposedProps<T> extends React.HTMLAttributes<T> {
  children: ReactNode;
}

interface CloseButtonProps<A> extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  extraAction?: A;
}
