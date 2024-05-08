import { useState } from "react";

export interface NameValuePair {
  name: string;
  value: string;
}

const useInput = (initialValue: Record<string, string>) => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { name, value } = e.target;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const updateByNameAndValue = ({ name, value }: NameValuePair) => {
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return { inputValue, handleInputChange, updateByNameAndValue };
};

export default useInput;
