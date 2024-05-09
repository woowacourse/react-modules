import { useState } from 'react';
import { isNotNumber, getNumberErrorMessage } from '../../utils/validation/validation';

const DEFAULT_LENGTH = 2;

const useCardPassword = (validLength: number = DEFAULT_LENGTH, initialValue: string = '') => {
  const [password, setPassword] = useState(initialValue);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const validatePassword = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, validLength);

    setPasswordErrorMessage(errorMessage);
    setIsValidPassword(!errorMessage);
  };

  const handlePasswordChange = (number: string) => {
    if (number.length > validLength) return;

    validatePassword(number);

    if (isNotNumber(number)) return;

    setPassword(number);
  };

  return {
    password,
    isValidPassword,
    passwordErrorMessage,
    handlePasswordChange,
  };
};

export default useCardPassword;
