import React from 'react';
import styled from 'styled-components';
import { BUTTON_SIZE } from '../../constants/styles';
import { StyleSize } from '../../types';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onButtonClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  $size?: StyleSize;
  $backgroundColor?: string;
  $color?: string;
}

function Button({
  onButtonClick,
  children,
  $size = 'medium',
  ...rest
}: ButtonProps) {
  return (
    <StyledButton onClick={onButtonClick} $size={$size} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;

interface ButtonStyleProps {
  $size?: StyleSize;
  $backgroundColor?: string;
  $color?: string;
}

const StyledButton = styled.button<ButtonStyleProps>`
  width: ${({ $size }) =>
    $size ? BUTTON_SIZE[$size].width : BUTTON_SIZE['medium'].width};
  height: ${({ $size }) =>
    $size ? BUTTON_SIZE[$size].height : BUTTON_SIZE['medium'].height};

  box-sizing: border-box;
  border: 1px solid var(--gray-color-100);
  border-radius: 0.5rem;

  background-color: ${({ $backgroundColor }) =>
    $backgroundColor || 'var(--black-color)'};
  color: ${({ $color }) => $color || 'var(--white-color)'};

  font-size: ${({ $size }) =>
    $size ? BUTTON_SIZE[$size].fontSize : BUTTON_SIZE['medium'].fontSize};
  padding: 0.8rem auto;
  font-weight: var(--font-weight-bold);
`;
