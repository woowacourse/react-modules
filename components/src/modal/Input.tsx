import { useState } from 'react';

function Input() {
  const [prompt, setPrompt] = useState('');

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setPrompt(value);
  };

  return <input type="text" onChange={onInputChange} value={prompt} />;
}

export default Input;
