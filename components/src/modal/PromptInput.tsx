import styled from '@emotion/styled';
import { ComponentPropsWithRef, useEffect } from 'react';

// ============================== Types ==============================

interface InputProps extends ComponentPropsWithRef<'input'> {
  isError?: boolean;
}

// ============================== Component ==============================

function PromptInput({ isError = false, ...props }: InputProps) {
  useEffect;
  return <StyledInput {...props} isError={isError} />;
}

// ============================== Styled Components ==============================

const StyledInput = styled.input<{ isError: boolean }>`
  width: 100%;
  border: 1px solid;
  border-radius: 4px;
  padding: 8px;
  box-sizing: border-box;

  border-color: ${({ isError }) => (isError ? 'red' : '#acacac')};

  &:focus {
    outline: none;
    border-color: ${({ isError }) => (isError ? 'red' : 'black')};
  }

  &::placeholder {
    font-weight: 400;
    font-size: 11px;
    color: #acacac;
  }
`;

export default PromptInput;
