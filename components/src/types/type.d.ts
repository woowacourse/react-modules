import React from 'react';

interface CustomStyle {
  primaryColor?: string;
  secondaryColor?: string;
  destructiveColor?: string;
}

type ModalPosition = 'center' | 'bottom';
type ButtonPosition = 'row' | 'column';

interface ModalProps {
  isOpened: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: ModalPosition;
  firstButton?: { text: string; onClick: () => void };
  secondButton?: { text: string; onClick: () => void };
  buttonPosition?: ButtonPosition;
  customStyle?: CustomStyle;
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
