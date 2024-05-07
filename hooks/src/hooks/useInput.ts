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

const useInput = () => {
  const [valueMap, setValueMap] = useState<Record<string, string | undefined>>({});
  const [errorMap, setErrorMap] = useState<Record<string, string | undefined>>({});

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
      ...props
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

    useEffect(() => {
      if (!valueMap[name]) {
        setValueMap((prev) => ({ ...prev, [name]: undefined }));
        setErrorMap((prev) => ({ ...prev, [name]: undefined }));
      }
    }, []);

    useEffect(() => {
      setErrorMap((prev) => ({ ...prev, [name]: errorMessage }));
    }, [errorMessage]);

    const ref = useRef<HTMLInputElement>(null);

    const requiredValidator = (input: string) => {
      if (!input && required) setError(required?.message);
    };

    const setCustomErrorMessage = (message?: string) => {
      if (message) setError(message);
    };

    const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setValue(input);
      setValueMap((prev) => ({ ...prev, [name]: input }));
      if (onChange) onChange(e);

      requiredValidator(input);
      setCustomErrorMessage(customErrorMessage);
    };

    return { name, ref, value: builtInValue, onChange: onChangeWrapper, ...props };
  };

  return { register: useRegister, valueMap, errorMap };
};

export default useInput;
