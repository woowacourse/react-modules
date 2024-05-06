import { useState, ChangeEvent } from 'react';
import { validateUserName } from '../validators/newCardInputValidator';

const useCardUserName = (cardUserNameLength: number) => {
  const [cardUserNameInfo, setCardUserNameInfo] = useState({
    cardUserName: '',
    isError: false,
  });

  const handleCardUserName = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateUserName(value, cardUserNameLength);

    if (isError) {
      setCardUserNameInfo({
        cardUserName: value,
        isError: true,
      });
      return;
    }

    setCardUserNameInfo({
      cardUserName: value,
      isError: false,
    });
  };

  return {
    cardUserNameInfo,
    handleCardUserName,
  };
};

export default useCardUserName;
