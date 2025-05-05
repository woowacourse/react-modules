import { ChangeEvent, useState } from 'react';
import { CVC_ERROR_TYPES, ERROR_MESSAGE } from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';

function useCVC() {
  const [CVC, setCVC] = useState('');

  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const getCVCValidationError = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 3);

    if (!isNumber) return CVC_ERROR_TYPES.notNumber;
    if (!isValidLength) return CVC_ERROR_TYPES.invalidLength;

    return null;
  };

  const handleCVCChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { value } = event.target;
    const errorType = getCVCValidationError(value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResult({
        isValid: !Boolean(errorType),
        errorMessage: errorType ? ERROR_MESSAGE.CVC[errorType] : '',
      });
    }

    setCVC(value);
  };

  return {
    CVC,
    validationResult,
    getCVCValidationError,
    handleCVCChange,
  };
}

export default useCVC;
