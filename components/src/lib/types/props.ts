interface ButtonProps {
  onClick?: () => void;
  text?: string;
  color?: string;
  backgroundColor?: string;
}

export type Position = 'center' | 'bottom';
export type Direction = 'row' | 'column';
export type Size = 'small' | 'medium' | 'large';

export interface BaseProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export interface ModalProps extends BaseProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface OverlayProps extends BaseProps {
  closeOnClick?: boolean;
}

export interface ModalContentProps extends BaseProps {
  hasTopCloseButton?: boolean;
  position?: Position;
  size?: Size;
}

export interface AlertContentProps extends ModalContentProps {
  alertButton?: ButtonProps;
}

export interface ConfirmContentProps extends ModalContentProps {
  confirmButton?: ButtonProps;
  cancelButton?: ButtonProps;
}

export interface PromptContentProps extends ModalContentProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  confirmButton?: ButtonProps;
  cancelButton?: ButtonProps;
}

export interface ButtonContainerProps extends BaseProps {
  direction?: Direction;
}
