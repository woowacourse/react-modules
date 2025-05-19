import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: ((e: React.MouseEvent<HTMLButtonElement>) => void) | (() => void);
  buttonText: string;
  width?: string;
  buttonType: 'confirm' | 'cancel';
}
