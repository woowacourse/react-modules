export interface TitleProps {
  content: string;
  position?: 'left' | 'center';
  color?: string;
  fontSize?: string;
}

export interface SubtitleProps {
  content: string;
  color?: string;
  fontSize?: string;
}

export interface CloseButtonProps {
  onClose: () => void;
}

export interface ConfirmButtonProps {
  backgroundColor?: string;
  fontColor?: string;
  content: string;
  onConfirm: () => void;
}

export interface CancelButtonProps {
  backgroundColor?: string;
  fontColor?: string;
  content: string;
  onCancel: () => void;
}

export interface ModalSizeProps {
  width?: string;
  height?: string;
  minWidth?: string;
  minHeight?: string;
}
