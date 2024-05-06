import { useState, ChangeEvent } from 'react';
import { validateCVC } from '../validators/newCardInputValidator';

const useCardCVC = (cardCVCLength: number) => {
  const [cardCVCInfo, setCardCVCInfo] = useState({
    cardCVC: '',
    isError: false,
  });

  const handleCardCVC = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const isError = validateCVC(value, cardCVCLength);

    if (isError) {
      setCardCVCInfo({
        cardCVC: value,
        isError: true,
      });
      return;
    }

    setCardCVCInfo({
      cardCVC: value,
      isError: false,
    });
  };

  return {
    cardCVCInfo,
    handleCardCVC,
  };
};

export default useCardCVC;
