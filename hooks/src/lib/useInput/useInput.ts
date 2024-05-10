import { useRef, useState } from "react";
import useValidation from "../useValidation/useValidation";

export interface ValidationType {
  validate: (value: string) => boolean;
  message: string;
}

interface UseInputProps {
  initialValue: string;
  inputValidations: ValidationType[];
  preventInputValidations?: ValidationType[];
}

const useInput = ({ initialValue, inputValidations, preventInputValidations }: UseInputProps) => {
  const [value, setValue] = useState(initialValue);
  const { error, setError, validate } = useValidation();
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, maxLength?: number) => {
    if (preventInputValidations && !validate(e.target.value, preventInputValidations)) {
      return;
    }

    if (inputValidations) {
      validate(e.target.value, inputValidations);
    }

    setValue(e.target.value);

    if (maxLength && e.target.value.length === maxLength) {
      const nextSibling = ref.current?.nextSibling as HTMLInputElement;

      if (nextSibling) nextSibling.focus();
    }
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputValidations) {
      validate(e.target.value, inputValidations);
    }
  };

  return { value, onChange: onChangeHandler, onBlur: onBlurHandler, error, setError, ref };
};

export default useInput;
