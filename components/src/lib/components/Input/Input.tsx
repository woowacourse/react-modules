import { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  value: string;
  fullWidth?: boolean;
};

const Input = ({ value, fullWidth, onChange, ...rest }: InputProps) => {
  return (
    <input
      onChange={onChange}
      className={`${styles.input} ${fullWidth ? styles['full-width'] : ''} ${styles.size}`}
      value={value}
      {...rest}
    />
  );
};

export default Input;
