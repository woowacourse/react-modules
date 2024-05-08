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
  onClose: () => void;
}

export interface ConfirmButtonProps {
  backgroundColor?: CSSProperties['backgroundColor'];
  fontColor?: CSSProperties['color'];
  buttonSize?: SizeProps;
  content: string;
  onConfirm: () => void;
}

export interface CancelButtonProps {
  backgroundColor?: CSSProperties['backgroundColor'];
  fontColor?: CSSProperties['color'];
  buttonSize?: SizeProps;
  content: string;
  onCancel: () => void;
}

export interface SizeProps {
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  minWidth?: CSSProperties['minWidth'];
  minHeight?: CSSProperties['minHeight'];
}
