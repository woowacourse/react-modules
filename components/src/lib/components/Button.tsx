import { ButtonProps } from '../types/Button.type';
import { ButtonStyle } from './Button.styles';

const Button = ({ type, onConfirm, buttonText, width = '100%' }: ButtonProps) => {
  return (
    <button className={ButtonStyle(type, width)} onClick={onConfirm}>
      {buttonText}
    </button>
  );
};

export default Button;
