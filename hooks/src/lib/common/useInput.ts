import { useState } from "react";

const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { value } = e.target;

    updateByNameAndValue(value);
  };

  const updateByNameAndValue = (value: string) => setInputValue(value);

  return { inputValue, handleInputChange, updateByNameAndValue } as const;
};

export default useInput;
