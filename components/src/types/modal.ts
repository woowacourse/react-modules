import { ModalPosition, Size } from './system';

export interface ModalMainProps {
  children?: React.ReactNode;
  isOpen: boolean;
  position: ModalPosition;
  size?: Size;
  onClose: () => void;
}

export interface TitleProps {
  children: React.ReactNode;
}

export interface CloseIconProps {
  children: React.ReactNode;
  onClick: () => void;
}

export interface ContentsProps {
  children: React.ReactNode;
}

export interface ConfirmButtonProps {
  label: string;
  size?: Size;
  onConfirm: () => void;
}

export interface CloseButtonProps {
  label: string;
  size?: Size;
  onClose: () => void;
}

export interface PromptInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
