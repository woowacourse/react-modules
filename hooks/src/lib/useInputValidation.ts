import { ChangeEvent, useState } from 'react';

interface UseInputProps<T> {
  args: ValidationProps<T>[];
}

interface ValidationProps<T> {
  validation: (args: T) => boolean;
  errorMessage: string;
}

const useInputValidation = <T>({ args }: UseInputProps<T>) => {
  const [isValid, setIsValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value as T;

    args.forEach((arg) => {
      const isValid = arg.validation(value);
      if (isValid === false) {
        setIsValid(false);
        setErrorMessage(arg.errorMessage);
      }
    });
  };

  return {
    inputState: {
      isValid,
      errorMessage,
    },
    handleInputChange,
  };
};

export default useInputValidation;
