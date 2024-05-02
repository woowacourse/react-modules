import { useState } from 'react';
import { isNotNumber, getNumberErrorMessage } from '../../utils/validation/validation';

const useCardPassword = (validLength: number = 2) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handlePasswordChange = (number: string) => {
    if (number.length > validLength) return;

    const errorMessage = getNumberErrorMessage(number, validLength);
    setPasswordErrorMessage(errorMessage);

    if (isNotNumber(number)) return;

    setIsValidPassword(!errorMessage);
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
