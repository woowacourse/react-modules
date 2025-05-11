import { useState } from 'react';

import useCardPasswordValidate from './useCardPasswordValidate';

export type CardPasswordResult = {
  password: string;
  errorMessage: string | null;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
};

const useCardPassword = (): CardPasswordResult => {
  const [password, setPassword] = useState('');
  const { errorMessage, validateCardPassword, validateCardPasswordBlur } =
    useCardPasswordValidate();

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    validateCardPassword(e.target.value);
  };

  const handlePasswordBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    validateCardPasswordBlur(e.target.value);
  };

  return { password, errorMessage, handlePasswordChange, handlePasswordBlur };
};

export default useCardPassword;
