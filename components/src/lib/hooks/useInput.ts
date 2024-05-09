import { useState, ChangeEvent } from "react";

export type ValidateType = (value: string) => {
  isValid: boolean;
};
interface Props {
  initialValue: string;
  validLength?: number;
}

const useInput = ({ initialValue = "" }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValue(value);
  };

  return {
    value,
    onChange: handleChange,
    setValue,
  };
};

export default useInput;
