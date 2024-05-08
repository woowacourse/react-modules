import React from 'react';
import styles from './ModalInput.module.css';

interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({ onChange, ...props }: ModalInputProps) => {
  return <input className={styles['input']} onChange={onChange} {...props} />;
};

export default ModalInput;
