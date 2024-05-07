import { InputHTMLAttributes } from 'react';

import styles from './Input.module.css';

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.modalInput} {...rest} />;
};

export default Input;
