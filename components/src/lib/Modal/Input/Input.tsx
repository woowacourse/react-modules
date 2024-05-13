import { InputHTMLAttributes } from 'react';
import styles from './input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  description: string;
}

export default function Input({ description, ...props }: InputProps) {
  return (
    <div className={styles.inputWrapper}>
      <label className={styles.SROnly} htmlFor={props.name}>
        {description}
      </label>
      <input className={styles.input} {...props} />
    </div>
  );
}
