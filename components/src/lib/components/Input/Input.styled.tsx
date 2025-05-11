import styled from '@emotion/styled';

import { InputProps } from '.';

export const StyledInput = styled.input<InputProps>`
  width: 100%;
  height: ${({ height }) => (typeof height === 'number' ? `${height}rem` : height)};
  padding: 0.5rem;
  border: 1px solid ${({ isValid }) => (isValid ? 'rgb(172, 172, 172)' : 'red')};
  border-radius: 5px;
  padding: 0.75rem;
  font-size: 1rem;
  box-sizing: border-box;

  &:focus {
    border-color: black;
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    border-color: #adb5bd;
    background-color: rgba(172, 172, 172, 0.2);
  }

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }
`;
