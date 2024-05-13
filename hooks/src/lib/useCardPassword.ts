import { useState, ChangeEvent } from 'react';
import { validatePassword } from './validators/validatePassword';

const useCardPassword = (cardPasswordLength: number) => {
  const [cardPassWordInfo, setCardPassWordInfo] = useState({
    password: '',
    errorMessage: '',
  });

  const handleCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const message = validatePassword(value, cardPasswordLength);

    setCardPassWordInfo({
      password: value,
      errorMessage: message,
    });
  };

  return {
    cardPassWordInfo,
    handleCardPassword,
  };
};

export default useCardPassword;
