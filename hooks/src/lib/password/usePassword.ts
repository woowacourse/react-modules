import { ChangeEvent, useState } from 'react';
import validatePassword from './validatePassword';

function usePassword() {
  const [password, setPassword] = useState<string>('');

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  return {
    password,
    errorState: validatePassword(password),
    handlePasswordChange
  };
}

export default usePassword;
