import { useState, ChangeEvent } from 'react';
import { validatePassword } from '../validators/newCardInputValidator';

const useCardPassword = (cardPasswordLength: number) => {
  const [cardPassWordInfo, setCardPassWordInfo] = useState({
    password: '',
    isError: false,
  });

  const handleCardPassword = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validatePassword(value, cardPasswordLength);

    if (isError) {
      setCardPassWordInfo({
        password: value,
        isError: true,
      });
      return;
    }

    setCardPassWordInfo({
      password: value,
      isError: false,
    });
  };

  return {
    cardPassWordInfo,
    handleCardPassword,
  };
};

export default useCardPassword;
