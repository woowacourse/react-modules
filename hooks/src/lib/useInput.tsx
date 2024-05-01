import { useState, ChangeEvent } from 'react';

type validateType = (value: string) => void;

const useInput = <T,>(initialValue: string = '', validate: validateType) => {
  const [value, setValue] = useState(initialValue);
  const [errorStatus, setErrorStatus] = useState<T | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    try {
      validate(e.target.value);
      setValue(e.target.value);
    } catch (e) {
      if (e instanceof Error) {
        setErrorStatus(e.message as T);
      }
    }
  };

  return { value, onChange: handleChange, errorStatus };
};

export default useInput;
