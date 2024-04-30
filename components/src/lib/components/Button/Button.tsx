import styles from './Button.module.css';
import { Size } from '../../../lib/Modal/Modal.type';
import { ButtonHTMLAttributes } from 'react';

type ButtonMode = 'primary' | 'secondary';

export interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  mode?: ButtonMode;
  size?: Size;
}

const Button = ({ text, mode = 'primary', size = 'lg', ...rest }: ModalButtonProps) => {
  return (
    <button className={`${styles.modalButton} ${styles[mode]} ${styles[size]}`} {...rest}>
      {text}
    </button>
  );
};

export default Button;
