import React from 'react';

type ModalPosition = 'center' | 'bottom';
type ButtonPosition = 'row' | 'column';

interface ModalProps {
  isOpened: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
  buttonPosition?: ButtonPosition;
  primaryColor?: string;
  showCloseButton?: boolean;
}

type ButtonSize = 'small' | 'medium' | 'large';
type ButtonWidth = 'fixed' | 'fit' | 'full';
type ButtonStyle = 'primary' | 'border' | 'text';

interface ButtonProps {
  text: string;
  onClick: () => void;
  size?: ButtonSize;
  width?: ButtonWidth;
  buttonStyle?: ButtonStyle;
  primaryColor?: string;
}
