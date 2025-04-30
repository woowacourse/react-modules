import { useState, ChangeEvent } from 'react';
import { CARD_PASSWORD } from '../constants/cardConfig';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_PASSWORD_ERROR } from '../constants/errorMessages';

export const useCardPassword = (initialPassword: string, initialError: string) => {
  const [cardPassword, setCardPassword] = useState<string>(initialPassword);
  const [cardPasswordError, setCardPasswordError] = useState<string>(initialError);

  const handleCardPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setCardPasswordError(CARD_PASSWORD_ERROR.onlyNumbers);
      return;
    }

    if (isNumber) {
      setCardPassword(value);
      setCardPasswordError('');
    } else {
      setCardPasswordError('');
    }
  };

  const isCardPasswordValid = () => {
    return cardPassword !== null && cardPassword.toString().length === CARD_PASSWORD.maxLength && !cardPasswordError;
  };

  return {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    isCardPasswordValid,
  };
};
