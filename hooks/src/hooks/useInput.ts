import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from "react";
import useRestrictedState from "./useRestrictedState";

interface CustomInputAttributes extends Omit<InputHTMLAttributes<HTMLInputElement>, "required"> {
  required?: {
    message: string;
  };
}

const useInput = () => {
  const [valueMap, setValueMap] = useState<Record<string, string | undefined>>({});
  const [errorMap, setErrorMap] = useState<Record<string, string | undefined>>({});

  const useRegister = (
    name: string,
    { onChange, onBlur, placeholder, required, type, maxLength }: CustomInputAttributes = {}
  ) => {
    const { valueState, errorState } = useRestrictedState({
      type: type === "number" ? "number" : undefined,
      maxLength,
    });
    const { value, setValue } = valueState;
    const { errorMessage, setError } = errorState;

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
      if (!input) setError(required?.message);
    };

    const onChangeWrapper = (e: ChangeEvent<HTMLInputElement>) => {
      const input = e.target.value;
      setValue(input);
      setValueMap((prev) => ({ ...prev, [name]: input }));
      if (onChange) onChange(e);

      requiredValidator(input);
    };

    return { onChange: onChangeWrapper, onBlur, name, ref, value, placeholder };
  };

  //
  return { register: useRegister, valueMap, errorMap };
};

export default useInput;
