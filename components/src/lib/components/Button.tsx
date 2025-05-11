import { ButtonProps } from '../types/Button.type';
import { ButtonStyle } from './Button.styles';

const Button = ({ type, onClick, buttonText, width = '100%' }: ButtonProps) => {
  return (
    <button className={ButtonStyle(type, width)} onClick={onClick} type={type === 'confirm' ? 'submit' : 'button'}>
      {buttonText}
    </button>
  );
};

export default Button;
