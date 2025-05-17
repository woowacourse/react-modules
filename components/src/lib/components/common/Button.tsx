import { css } from '@emotion/css';
import { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'default' | 'danger';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ variant = 'default', children, onClick, ...props }: ButtonProps) => {
  return (
    <button type="button" className={buttonStyle(variant)} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;

const buttonStyle = (variant: ButtonVariant) => css`
  all: unset;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid;

  ${variant === 'primary' &&
  css`
    background-color: #333333;
    color: white;
    border-color: #333333;

    &:hover {
      background-color: #111111;
    }
  `}

  ${variant === 'default' &&
  css`
    background-color: white;
    color: #333333;
    border-color: #c9c9c9;

    &:hover {
      background-color: #c9c9c9;
    }
  `}

  ${variant === 'danger' &&
  css`
    background-color: #dc3545;
    color: white;
    border-color: #dc3545;

    &:hover {
      background-color: #bb2d3b;
    }
  `}
`;
