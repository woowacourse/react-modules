import { useState } from 'react';

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  };

  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    const inputValidationsResult = inputValidations.find(({ validate }) => !validate(e.target.value));

    if (inputValidationsResult) {
      setError({ state: true, message: inputValidationsResult.message });
    } else {
      setError({ state: false, message: '' });
    }
  };

  return { value, onChange: onChangeHandler, onBlur: onBlurHandler, error };
};

export default useInput;
