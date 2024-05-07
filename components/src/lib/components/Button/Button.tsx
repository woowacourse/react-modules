import { ButtonHTMLAttributes } from 'react';
import type { Size } from '../../type/common';
import styles from './Button.module.css';

type ButtonColor = 'default' | 'none';
type ButtonVariant = 'normal' | 'border';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  color?: ButtonColor;
  size?: Size;
  fullWidth?: boolean;
  variants?: ButtonVariant;
}

const Button = ({ text, color = 'default', size = 'lg', fullWidth, variants = 'normal', ...rest }: ButtonProps) => {
  return (
    <button
      className={`${styles.modalButton} ${styles[color]} ${styles[size]} ${fullWidth ? styles['full-width'] : ''} ${styles[variants]}`}
      {...rest}
    >
      {text}
    </button>
  );
};

export default Button;
