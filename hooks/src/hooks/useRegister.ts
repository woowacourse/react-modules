import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import useRestrictedState from "./useRestrictedState";

interface CustomInputAttributes extends Omit<InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: {
    message: string;
  };
  customType?: "number" | "english";
  typeErrorMessage?: string;
  maxLengthErrorMessage?: string;
  customErrorMessage?: string;
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
    customErrorMessage,
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
  const [customErrMsgState, setCustomErrMsg] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  useEffect(() => {
    setCustomErrMsg(customErrorMessage);
  }, [customErrorMessage]);

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

  return { name, ref, value: builtInValue, onChange: onChangeWrapper, errorMessage: errorMessage ?? customErrMsgState };
};

export default useRegister;
