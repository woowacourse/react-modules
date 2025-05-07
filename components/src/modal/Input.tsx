import styled from '@emotion/styled';
import { useState } from 'react';

function Input() {
  const [prompt, setPrompt] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPrompt(value);
  };

  return <StyledInput type="text" onChange={onInputChange} value={prompt} />;
}

const StyledInput = styled.input`
  height: 28px;
  padding: 8px;

  border-radius: 2px;
  border-width: 1px;

  font-size: 15px;
  line-height: 15px;
`;

export default Input;
