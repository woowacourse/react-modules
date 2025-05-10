import { InputProps } from '../types/Input.type';
import { InputStyle } from './Input.style';

const Input = ({ type = 'text', placeholder, value, onChange }: InputProps) => {
  return <input className={InputStyle} type={type} placeholder={placeholder} value={value} onChange={onChange} />;
};

export default Input;
