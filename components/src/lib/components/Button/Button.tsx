import { ButtonHTMLAttributes } from 'react';
import type { Size } from '../../type/common';
import styles from './Button.module.css';

type ButtonMode = 'primary' | 'secondary';

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode?: ButtonMode;
  size?: Size;
  fullWidth?: boolean;
}

const Button = ({ text, mode = 'primary', size = 'lg', fullWidth, ...rest }: ModalButtonProps) => {
  console.log(fullWidth);
  return (
    <button
      className={`${styles.modalButton} ${styles[mode]} ${styles[size]} ${fullWidth ? styles['full-width'] : ''}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
