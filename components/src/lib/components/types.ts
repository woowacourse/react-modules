export type StyleSize = 'small' | 'medium' | 'large';
export type StyleDirection = 'row' | 'column';
export type StyleAlign = 'start' | 'center' | 'end';
export type StylePosition = 'center' | 'bottom';

export interface BasicModal {
  title: string;
  basicDescription?: string;
  isCloseIcon?: boolean;
  onModalClose: () => void;
  $modalSize?: StyleSize;
  $position?: StylePosition;
  $contentDirection?: StyleDirection;
  $footerDirection?: StyleDirection;
  $align?: StyleAlign;
  $buttonSize?: StyleSize;
  $buttonBackgroundColor?: string;
  $buttonColor?: string;
}
