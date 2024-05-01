import { useState } from 'react';
import { getNumberErrorMessage } from '../utils/validation';

const useCardPassword = (validLength: number = 2) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const handlePasswordChange = (number: string) => {
    const errorMessage = getNumberErrorMessage(number, validLength);

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
