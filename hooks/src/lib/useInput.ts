import { useRef, useState } from 'react';

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
  const [error, setError] = useState({
    state: false,
    message: '',
  });
  const ref = useRef<HTMLInputElement>(null);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>, maxLength?: number) => {
    const preventInputValidationsResult = preventInputValidations && preventInputValidations.find(({ validate }) => !validate(e.target.value));
    const inputValidationsResult = inputValidations.find(({ validate }) => !validate(e.target.value));

    if (preventInputValidationsResult) {
      setError({ state: true, message: preventInputValidationsResult.message });
      return;
    }

    if (inputValidationsResult) {
      setError({ state: true, message: inputValidationsResult.message });
    } else {
      setError({ state: false, message: '' });
    }

    setValue(e.target.value);

    if (maxLength && e.target.value.length === maxLength) {
      const nextSibling = ref.current?.nextSibling as HTMLInputElement;

      if (nextSibling) nextSibling.focus();
    }
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValidationsResult = inputValidations.find(({ validate }) => !validate(e.target.value));

    if (inputValidationsResult) {
      setError({ state: true, message: inputValidationsResult.message });
    } else {
      setError({ state: false, message: '' });
    }
  };

  return { value, onChange: onChangeHandler, onBlur: onBlurHandler, error, setError, ref };
};

export default useInput;
