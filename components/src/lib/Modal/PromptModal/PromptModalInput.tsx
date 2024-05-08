import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function PromptModalInput(props: InputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px 15px 8px 8px;
  gap: 8px;
  border: 1px solid rgba(172, 172, 172, 1);
  border-radius: 2px;
  font-family: Inter;
  font-size: 11px;
  font-weight: 400;
  line-height: 14.88px;
  text-align: left;

  &::placeholder {
    color: rgba(172, 172, 172, 1);
  }
`;
