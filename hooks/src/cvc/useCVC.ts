import { ChangeEvent, useState } from 'react';
import { ValidationResult } from '../types';
import { ERROR_MESSAGE } from '../constants';

function useCVC() {
  const [CVC, setCVC] = useState('');

  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length === 3;
  };

  const validateCVC = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.CVC.notNumber,
      });
      return;
    }

    if (!isValidLength) {
      setValidationResult({
        isValid: false,
        errorMessage: ERROR_MESSAGE.CVC.invalidLength,
      });
      return;
    }

    setValidationResult({
      isValid: true,
      errorMessage: '',
    });
  };

  const handleCVCChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCVC(value);
  };

  return {
    CVC,
    validationResult,
    validateCVC,
    handleCVCChange,
  };
}

export default useCVC;
