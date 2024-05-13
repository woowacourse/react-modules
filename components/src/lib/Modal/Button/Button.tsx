import { MouseEvent, PropsWithChildren } from 'react';
import styles from './button.module.css';

interface ButtonProps {
  size: 'small' | 'full';
  backgroundColor: 'primary' | 'secondary';
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ size, backgroundColor, onClick, children }: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[size]} ${styles[backgroundColor]}`}>
      {children}
    </button>
  );
}
