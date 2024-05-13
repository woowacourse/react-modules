import React from 'react';
import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, ...props }: InputProps) => {
  return <input className={styles['input']} onChange={onChange} {...props} />;
};

export default Input;
