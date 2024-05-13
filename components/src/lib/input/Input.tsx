import styles from './Input.module.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange, ...rest }: InputProps) => {
  return <input className={styles.input} value={value} onChange={onChange} {...rest} />;
};

export default Input;
