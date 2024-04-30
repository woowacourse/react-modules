import React from 'react';

interface ModalProps {
  isOpened: boolean;
  closeModal: () => void;
  title?: string;
  description?: string;
  children?: JSX.Element;
  modalPosition?: 'center' | 'bottom';
  firstButton?: { text: string; onClick: () => void };
  secondButton?: { text: string; onClick: () => void };
  buttonPosition: 'column' | 'row';
  customStyle?: {
    primaryColor?: 'string';
    secondaryColor?: 'string';
    destructiveColor?: 'string';
  };
}
