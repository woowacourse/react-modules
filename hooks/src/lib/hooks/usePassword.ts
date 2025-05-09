import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthEqual, isPositiveInteger} from '../utils/validation';

const MAX_LENGTH = 2;

const usePassword = () => {
  const [password, setPassword] = useState('');
  const [passwordValidationResult, setPasswordValidationResult] =
    useState<ValidationType>(defaultValidationValue);

  const onChange = (value: string) => {
    onValidation(value);
    setPassword(value);
  };

  const onValidation = (value: string) => {
    if (isEmpty(value)) {
      setPasswordValidationResult(defaultValidationValue);
      return;
    }

    if (!isPositiveInteger(value)) {
      setPasswordValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setPasswordValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.generateInvalidLengthMsg(MAX_LENGTH),
      });
      return;
    }

    setPasswordValidationResult(defaultValidationValue);
  };

  return {onChange, password, passwordValidationResult};
};

export default usePassword;
