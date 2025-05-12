import { useCallback, useMemo, useState } from 'react';
import { CVC_ERROR_TYPES, ERROR_MESSAGE } from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';
import { createValidationResult } from '../utils';

function useCVC() {
  const [CVC, setCVC] = useState('');

  const getCVCValidationError = useCallback((value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 3);

    if (!isNumber) return CVC_ERROR_TYPES.notNumber;
    if (!isValidLength) return CVC_ERROR_TYPES.invalidLength;

    return null;
  }, []);

  const validationResult: ValidationResult = useMemo(
    () =>
      createValidationResult(ERROR_MESSAGE.CVC, [getCVCValidationError(CVC)]),
    [CVC, getCVCValidationError]
  );

  const handleCVCChange = useCallback(
    (value: string, options?: { skipValidation?: boolean }) => {
      const shouldSkipValidation = options?.skipValidation ?? false;

      const errorType = getCVCValidationError(value);

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setCVC(value);
    },
    [getCVCValidationError]
  );

  return {
    CVC,
    validationResult,
    getCVCValidationError,
    handleCVCChange,
  };
}

export default useCVC;
