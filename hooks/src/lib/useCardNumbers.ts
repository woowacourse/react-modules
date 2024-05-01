import { useState, ChangeEvent, FocusEvent } from 'react';
import useCardNumber from './useCardNumber';
import useValidation from './useValidation';

interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UseCardNumbersProps {
  validationErrors: ValidationErrors;
}
export default function useCardNumbers({ validationErrors }: UseCardNumbersProps) {
  const [numbers, setNumbers] = useState(Array.from({ length: 4 }, () => ''));
  const [error, setError] = useState(Array.from({ length: 4 }, () => false));
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { changeEventValidators, blurEventValidators } = useCardNumber({ validationErrors });

  interface Param {
    value: string;
    index: number;
    validators: {
      test: (value: string) => boolean;
      errorMessage: string;
    }[];
  }

  /**
   * 입력란 하나에 대한 유효성 검사
   */
  const handleValidation = ({ value, index, validators }: Param) => {
    const result = useValidation<string>({ validators, value });

    const newNumbers = [...numbers];
    newNumbers[index] = value;
    setNumbers(newNumbers);

    setErrorMessage(result.isValid ? null : result.errorMessage);

    const newError = [...error];
    newError[index] = result.isValid;
    setError(newError);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    handleValidation({ value: e.target.value, index, validators: changeEventValidators });
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>, index: number) => {
    handleValidation({ value: e.target.value, index, validators: blurEventValidators });
  };

  const updateValue = (value: string, index: number) => {
    const validators = [...changeEventValidators, ...blurEventValidators];
    handleValidation({ value, index, validators });
  };

  return { numbers, handleChange, handleBlur, updateValue, errorMessage, error };
}
