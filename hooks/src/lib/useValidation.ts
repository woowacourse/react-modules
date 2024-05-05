import { useState } from 'react';

export interface ValidationType<T> {
  validate: (value: T) => boolean;
  message: string;
}

const INITIAL_ERROR_STATE = { state: false, message: '' };

const useValidation = <T>() => {
  const [error, setError] = useState(INITIAL_ERROR_STATE);

  const validateValue = (value: T, validations: ValidationType<T>[]) => {
    const validateResult = validations.find(({ validate }) => !validate(value));

    if (validateResult) {
      setError({
        state: true,
        message: validateResult.message,
      });

      return true;
    }

    setError(INITIAL_ERROR_STATE);

    return false;
  };

  return { error, validateValue };
};

export default useValidation;
