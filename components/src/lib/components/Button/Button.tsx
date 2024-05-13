import { ButtonHTMLAttributes } from 'react';
import type { Size } from '../../types/common';
import styles from './Button.module.css';

type ButtonMode = 'primary' | 'secondary';

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode?: ButtonMode;
  size?: Size;
}

const Button = ({ text, mode = 'primary', size = 'lg', ...rest }: ModalButtonProps) => {
  return (
    <button {...rest} className={`${styles.modalButton} ${styles[mode]} ${styles[size]} ${rest.className || ''}`}>
      {text}
    </button>
  );
};

export default Button;
