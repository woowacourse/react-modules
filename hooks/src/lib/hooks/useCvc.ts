import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthEqual, isPositiveInteger} from '../utils/validation';

const MAX_LENGTH = 3;

const useCvc = () => {
  const [cvc, setCvc] = useState('');
  const [cvcValidationResult, setCvcValidationResult] =
    useState<ValidationType>(defaultValidationValue);

  const onChange = (value: string) => {
    validation(value);
    setCvc(value);
  };

  const validation = (value: string) => {
    if (isEmpty(value)) {
      setCvcValidationResult(defaultValidationValue);
      return;
    }

    if (!isPositiveInteger(value)) {
      setCvcValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setCvcValidationResult({
        isError: true,
        errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
      });
      return;
    }

    setCvcValidationResult(defaultValidationValue);
  };

  return {onChange, cvc, cvcValidationResult};
};
export default useCvc;
