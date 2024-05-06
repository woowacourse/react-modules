import { useState } from 'react';
import { UseInputs } from './type';

const useInputs = (initialValue: Record<string, string>): UseInputs => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, name: string) => {
    setValue(prev => ({
      ...prev,
      [name]: event.target.value,
    }));
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default useInputs;
