type ModalPosition = 'center' | 'bottom';
type CloseButtonType = 'icon' | 'box';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  position: ModalPosition;
  children: ReactNode;
  isModalOpen: boolean;
  closeModal: () => void;
}

interface BasicModalProps extends Omit<ModalProps, 'type'> {
  modalTitle: ReactNode;
  closeButtonType: CloseButtonType;
}

interface ModalComposedProps<T> extends React.HTMLAttributes<T> {
  children: ReactNode;
}

interface ModalButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  buttonType?: CloseButtonType;
  children?: ReactNode;
}

interface ActionButtonProps<A> extends ModalButtonProps {
  action?: A;
  closeAfterAction?: boolean;
}
