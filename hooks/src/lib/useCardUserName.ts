import { useState, ChangeEvent } from 'react';
import { validateUserName } from './validators/validateUserName';

const useCardUserName = (cardUserNameLength: number) => {
  const [cardUserNameInfo, setCardUserNameInfo] = useState({
    cardUserName: '',
    errorMessage: '',
  });

  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const messae = validateUserName(value, cardUserNameLength);

    setCardUserNameInfo({
      cardUserName: value,
      errorMessage: messae,
    });
  };

  return {
    cardUserNameInfo,
    handleCardUserName,
  };
};

export default useCardUserName;
