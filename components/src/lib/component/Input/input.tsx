import styled from '@emotion/styled';
import { ComponentProps } from 'react';

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 2px;
  width: 100%;
  display: block;
  border: 1px solid #000;
  box-sizing: border-box;
`;

export default function ModalInput(props: ComponentProps<'input'>) {
  return <StyledInput {...props} />;
}
