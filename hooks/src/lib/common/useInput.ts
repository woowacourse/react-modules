import { useState } from "react";

export interface NameValuePair {
  name: string;
  value: string;
}

export type EventProcessor =
  | React.FocusEvent<HTMLInputElement>
  | React.KeyboardEvent<HTMLInputElement>;

const useInput = <T extends object>(initialValue: T) => {
  const [inputValue, setInputValue] = useState<T>(initialValue);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target !== e.currentTarget) return;
    const { value, name } = e.target;

    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const updateByNameAndValue = ({ name, value }: NameValuePair) => {
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return { inputValue, handleInputChange, updateByNameAndValue };
};

export default useInput;
