import { ChangeEvent, InputHTMLAttributes, useEffect, useRef } from "react";
import useRestrictedState from "./useRestrictedState";

interface CustomInputAttributes extends Omit<InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: {
    message: string;
  };
  customType?: "number" | "english";
  typeErrorMessage?: string;
  maxLengthErrorMessage?: string;
  value?: string;
}

const useRegister = (
  name: string,
  {
    onChange,
    required,
    customType,
    typeErrorMessage,
    maxLength,
    maxLengthErrorMessage,
    value,
  }: CustomInputAttributes = {}
) => {
  const { valueState, errorState } = useRestrictedState({
    type: customType,
    typeErrorMessage,
    maxLength,
    maxLengthErrorMessage,
  });
  const { value: builtInValue, setValue } = valueState;
  const { errorMessage, setError } = errorState;

  useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  const ref = useRef<HTMLInputElement>(null);

  const requiredValidator = (input: string) => {
    if (!input && required) setError(required?.message);
  };

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);
    if (onChange) onChange(e);

    requiredValidator(input);
  };

  return { name, ref, value: builtInValue, onChange: onChangeWrapper, errorMessage: errorMessage };
};

export default useRegister;
