import { CSSProperties, ElementType } from 'react';

export interface TitleProps {
  content: string;
  position?: 'left' | 'center';
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  as?: ElementType;
}

export interface SubtitleProps {
  content: string;
  color?: CSSProperties['color'];
  fontSize?: CSSProperties['fontSize'];
  as?: ElementType;
}

export interface CloseButtonProps {
  display: boolean;
  onClose: () => void;
}

export interface ConfirmButtonProps {
  backgroundColor?: CSSProperties['backgroundColor'];
  fontColor?: CSSProperties['color'];
  buttonSize?: ButtonSizeProps;
  content: string;
  onConfirm: () => void;
}

export interface CancelButtonProps {
  backgroundColor?: CSSProperties['backgroundColor'];
  fontColor?: CSSProperties['color'];
  buttonSize?: ButtonSizeProps;
  content: string;
  onCancel: () => void;
}

export interface ButtonSizeProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
}

export type CustomSize = 'small' | 'medium' | 'large';

export interface ModalSizeProps {
  width?: CSSProperties['width'] | CustomSize;
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
}
