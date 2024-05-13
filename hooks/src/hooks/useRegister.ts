import { ChangeEvent, InputHTMLAttributes, useRef, useState } from "react";
import useRestrictedState from "./useRestrictedState";

interface CustomInputAttributes extends Omit<InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: boolean;
  customType?: "number" | "english";
  value?: string;
  validator?: (value: string) => string | undefined;
}

export enum RegisterErrorType {
  RequiredError = "requiredTypeError",
}

const useRegister = (
  name: string,
  { onChange, required, customType, maxLength, validator, disabled }: CustomInputAttributes = {}
) => {
  const { valueState, errorType } = useRestrictedState({
    type: customType,
    maxLength,
  });
  const { value, setValue } = valueState;
  const [registerErrorType, setRegisterErrorType] = useState<RegisterErrorType>();

  const ref = useRef<HTMLInputElement>(null);

  const requiredValidator = (input: string) => {
    if (!input && required) setRegisterErrorType(RegisterErrorType.RequiredError);
  };

  const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const isValid = validator ? validator(input) : true;
    if (isValid !== "" && !isValid) return;

    setValue(input);
    if (onChange) onChange(e);
    requiredValidator(input);
  };

  return { name, ref, value, onChange: onChangeWrapper, disabled, errorType: errorType ?? registerErrorType };
};

export default useRegister;
