import { PropsWithChildren } from 'react';
import styles from './label.module.css';

interface LabelProps {
  color: 'basic' | 'lightGray';
}

export default function Label({ color, children }: PropsWithChildren<LabelProps>) {
  return (
    <div className={styles.labelContainer}>
      <span className={`${styles.label} ${styles[color]}`}>{children}</span>
    </div>
  );
}
