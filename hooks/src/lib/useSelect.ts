import { useState } from 'react';
import { UseSelect } from './type';

const useSelect = (initialValue: string): UseSelect => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
  };

  return {
    value,
    setValue,
    handleChange,
  };
};

export default useSelect;
