import { useState } from 'react';

import useCardPasswordValidation from './useCardPasswordValidation';
import { CARD_PASSWORD_ERROR_TYPE } from './useCardPassword.constant';

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState('');
  const { cardPasswordError, validateCardPassword } = useCardPasswordValidation();

  const handleChangeCardPassword = (value: string) => {
    const errorType = validateCardPassword(value.slice(0, 2));

    if (errorType === CARD_PASSWORD_ERROR_TYPE.nonNumeric || value.length > 2) return;

    setCardPassword(value);
  };

  return {
    cardPassword,
    cardPasswordError,
    handleChangeCardPassword,
  };
};

export default useCardPassword;
