import styled from 'styled-components';
import { ButtonSize } from './constant/buttonSize';
import { useState } from 'react';

interface Props {
  width: string;
  placeholder: string;
}
const Input = ({ width, placeholder = '' }: Props) => {
  const [value, setValue] = useState<string>('');
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      $width={ButtonSize[width]}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

const StyledInput = styled.input<{ $width: string }>`
  width: 100%;
  padding: 7px 0;
  border-radius: 5px;
  border: 1px solid #8b95a1;
`;

export default Input;
