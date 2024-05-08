import styles from './ModalInput.module.css';

export interface ModalInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({ value, onChange, ...rest }: ModalInputProps) => {
  return <input className={styles.input} value={value} onChange={onChange} {...rest} />;
};

export default ModalInput;
