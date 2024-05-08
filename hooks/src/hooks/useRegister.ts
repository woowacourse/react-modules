import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import useRestrictedState from "./useRestrictedState";

interface CustomInputAttributes extends Omit<InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: boolean;
  customType?: "number" | "english";
  value?: string;
}

enum RegisterErrorType {
  RequiredError = "requiredTypeError",
}

const useRegister = (
  name: string,
  { onChange, required, customType, maxLength, value }: CustomInputAttributes = {}
) => {
  const { valueState, errorType } = useRestrictedState({
    type: customType,
    maxLength,
  });
  const { value: builtInValue, setValue } = valueState;
  const [registerErrorType, setRegisterErrorType] = useState<RegisterErrorType>();

  useEffect(() => {
    if (value) setValue(value);
  }, [value]);

  const ref = useRef<HTMLInputElement>(null);

  const requiredValidator = (input: string) => {
    if (!input && required) setRegisterErrorType(RegisterErrorType.RequiredError);
  };

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setValue(input);
    if (onChange) onChange(e);

    requiredValidator(input);
  };

  return { name, ref, value: builtInValue, onChange: onChangeWrapper, errorType: errorType ?? registerErrorType };
};

export default useRegister;
