import { ChangeEvent, useState } from 'react';
import { ValidationResult } from '../types';
import { CVC_ERROR_TYPES, ERROR_MESSAGE } from '../constants';

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
    return value.length <= 3;
  };

  const validateCVC = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      return CVC_ERROR_TYPES.notNumber;
    }

    if (!isValidLength) {
      return CVC_ERROR_TYPES.invalidLength;
    }

    return null;
  };

  const handleCVCChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { value } = event.target;
    const errorType = validateCVC(value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResult({
        isValid: !Boolean(errorType),
        errorMessage: errorType ? ERROR_MESSAGE.cardNumber[errorType] : '',
      });
    }

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
