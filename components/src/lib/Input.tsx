import { ComponentProps } from 'react';
import styled from 'styled-components';

function Input(props: ComponentProps<'input'>) {
  return <StyledInput {...props} />;
}

export default Input;

const StyledInput = styled.input`
  width: 100%;
  height: 32px;
  border: 1px solid #000000;
  border-radius: 2px;
  padding: 8px;
  box-sizing: border-box;
`;
