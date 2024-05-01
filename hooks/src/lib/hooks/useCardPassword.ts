import { useState } from 'react';
import { isNotNumber, isValidNumberLength } from '../utils/validation';

const ERROR_MESSAGES = {
  NOT_NUMBER: '숫자를 입력해주세요.',
  MAX_LENGTH: (length: number) => `${length}개의 숫자를 입력해주세요.`,
};

const useCardPassword = (validLength: number = 2) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const getErrorMessage = (number: string) => {
    if (isNotNumber(number)) return ERROR_MESSAGES.NOT_NUMBER;

    if (isValidNumberLength(number, validLength)) return ERROR_MESSAGES.MAX_LENGTH(validLength);

    return '';
  };

  const handlePasswordChange = (number: string) => {
    const errorMessage = getErrorMessage(number);

    setPasswordErrorMessage(errorMessage);

    if (errorMessage !== '') return;

    setPassword(number);
    setIsValidPassword(true);
  };

  return {
    password,
    isValidPassword,
    passwordErrorMessage,
    handlePasswordChange,
  };
};

export default useCardPassword;
