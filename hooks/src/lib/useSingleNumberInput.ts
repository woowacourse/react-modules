import { useState } from 'react';

const useSingleNumberInput = () => {
  const [inputValue, setInputValue] = useState('');

  return { inputValue, setInputValue };
};

export default useSingleNumberInput;
