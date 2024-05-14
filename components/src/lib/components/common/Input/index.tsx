import React from 'react';
import styled from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

function Input({ label, ...rest }: InputProps) {
  return (
    <InputContainer>
      {label && <StyledLabel>{label}</StyledLabel>}
      <StyledInput {...rest} />
    </InputContainer>
  );
}

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: var(--font-size-sm);
`;

const StyledInput = styled.input`
  height: 2.4rem;
  padding: 0.4rem;
  border: 1px solid var(--black-color);
  border-radius: 0.2rem;
  color: var(--black-color);
`;

const StyledLabel = styled.label`
  color: var(--gray-color-500);
  font-size: var(--font-size-xs);
`;
