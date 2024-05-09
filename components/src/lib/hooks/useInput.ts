import { useState } from 'react';

const useInput = (initValue: string = '') => {
  const [value, setValue] = useState(initValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const resetValue = () => {
    setValue(initValue);
  };

  return { value, handleChange, resetValue };
};

export default useInput;
