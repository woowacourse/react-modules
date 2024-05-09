import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.SROnly} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} {...props} />
    </div>
  );
}
