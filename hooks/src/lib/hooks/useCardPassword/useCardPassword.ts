import { useState } from 'react';
import { isNotNumber, getNumberErrorMessage } from '../../utils/validation/validation';

const useCardPassword = (validLength: number = 2) => {
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('');

  const updateErrorMessage = (password: string, validLength: number) => {
    const errorMessage = getNumberErrorMessage(password, validLength);
    setPasswordErrorMessage(errorMessage);

    return errorMessage;
  };

  const updateValidation = (errorMessage: string) => {
    setIsValidPassword(errorMessage === '');
  };

  const handlePasswordChange = (password: string) => {
    if (password.length > validLength) return;

    const errorMessage = updateErrorMessage(password, validLength);
    updateValidation(errorMessage);

    if (isNotNumber(password)) return;

    setPassword(password);
  };

  return {
    password,
    isValidPassword,
    passwordErrorMessage,
    handlePasswordChange,
  };
};

export default useCardPassword;
