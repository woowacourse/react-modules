import { useState } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';
import CardBrandService from '../domain/CardBrandService';

const useCardNumbers = () => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState({
    cardNumbers: '',
    errorMessage: '',
  });

  const handleCardNumbers = (value: string) => {
    const cardBrand = CardBrandService(value);
    const { errorMessage, errorType } = validateCardNumber(cardBrand, value);

    if (errorType === 'NonNumeric') {
      setCardNumbersInfo({
        cardNumbers: cardNumbersInfo.cardNumbers,
        errorMessage,
      });
      return;
    }

    if (errorType === 'DinersInvalidLength' && value.length > 14) return;

    if (errorType === 'AMEXInvalidLength' && value.length > 15) return;

    if (value.length > 16) return;

    setCardNumbersInfo({
      cardNumbers: value,
      errorMessage: errorMessage,
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
