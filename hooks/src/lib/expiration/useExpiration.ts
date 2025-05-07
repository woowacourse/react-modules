import { ChangeEvent, useState } from 'react';
import validateExpiration from './validateExpiration';

export type ExpirationStateType = typeof initialExpirationState;

const initialExpirationState = {
  year: '',
  month: ''
};

export type ExpirationStateKey = keyof ExpirationStateType;

function useExpiration() {
  const [expiration, setExpiration] = useState<ExpirationStateType>(initialExpirationState);

  const handleExpirationChange = (e: ChangeEvent<HTMLInputElement>, field: ExpirationStateKey) => {
    const value = e.target.value;
    setExpiration((prev) => ({ ...prev, [field]: value }));
  };

  return {
    expiration,
    errorState: validateExpiration(expiration),
    handleExpirationChange
  };
}

export default useExpiration;
