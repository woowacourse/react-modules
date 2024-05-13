import { useState, ChangeEvent } from 'react';
import { validateCVC } from './validators/validateCVC';

const useCardCVC = (cardCVCLength: number) => {
  const [cardCVCInfo, setCardCVCInfo] = useState({
    cardCVC: '',
    errorMessage: '',
  });

  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const message = validateCVC(value, cardCVCLength);

    setCardCVCInfo({
      cardCVC: value,
      errorMessage: message,
    });
  };

  return {
    cardCVCInfo,
    handleCardCVC,
  };
};

export default useCardCVC;
