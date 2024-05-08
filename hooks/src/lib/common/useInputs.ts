import { useState } from "react";

const useInputs = <T extends string>(initialValue: Record<T, string>) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { name, value } = e.target;

    updateByNameAndValue(name, value);
  };

  const updateByNameAndValue = (name: string, value: string) =>
    setInputValue((prev) => ({ ...prev, [name]: value }));

  return { inputValue, handleInputChange, updateByNameAndValue } as const;
};

export default useInputs;
