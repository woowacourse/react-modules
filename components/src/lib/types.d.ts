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

interface CloseButtonProps<A> extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  children: ReactNode;
  extraAction?: A;
}
