import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

const Input = ({ fullWidth, ...rest }: InputProps) => {
  return <input className={`${styles.input} ${fullWidth ? styles['full-width'] : ''} ${styles.size}`} {...rest} />;
};

export default Input;
