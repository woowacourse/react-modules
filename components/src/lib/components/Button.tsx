import { ButtonProps } from '../types/Button.type';
import { ButtonStyle } from './Button.styles';

const Button = ({ buttonType, onClick, buttonText, width = '100%', ...props }: ButtonProps) => {
  return (
    <button
      className={ButtonStyle(buttonType, width)}
      onClick={onClick}
      type={buttonType === 'confirm' ? 'submit' : 'button'}
      {...props}
    >
      {buttonText}
    </button>
  );
};

export default Button;
