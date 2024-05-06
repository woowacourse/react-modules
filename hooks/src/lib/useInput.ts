import { useState } from 'react';
import { UseInput } from './type';

const useInput = (initialValue: string): UseInput => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default useInput;
