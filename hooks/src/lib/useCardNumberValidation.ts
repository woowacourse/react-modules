import { useState } from 'react';
import { REGEX, MAX_LENGTH } from './constants';

interface ValidationResult {
  isValid: boolean;
  errorMessage?: string[];
}

const useCardNumberValidation = () => {
  const [validationResults, setValidationResults] = useState<ValidationResult[]>(() =>
    Array(4).fill({ isValid: true, errorMessage: [] })
  );

  const isNumericInput = (value: string) => REGEX.onlyNumber.test(value);
  const isValidateCardNumber = (value: string) => value.length === MAX_LENGTH.cardNumber;

  const handleCardNumberChange = (cardNumber: string, index: number) => {
    const errors: string[] = [];
    const isNumeric = isNumericInput(cardNumber);
    const isValidNumber = isValidateCardNumber(cardNumber);

    if (!isNumeric) {
      errors.push('숫자를 입력해주세요.');
    }
    if (!isValidNumber) {
      errors.push(`${MAX_LENGTH.cardNumber}자리 숫자를 입력해주세요.`);
    }

    setValidationResults((prevResults) => {
      const newResults = [...prevResults];
      newResults[index] = { isValid: isNumeric && isValidNumber, errorMessage: errors };
      return newResults;
    });
  };

  return { validationResults, handleCardNumberChange };
};

export default useCardNumberValidation;
