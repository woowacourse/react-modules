import { useState } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';
import CardBrandService from '../domain/CardBrandService';
import formatCardNumbers from '../utils/formatCardNumbers';

interface cardNumbersInfoProps {
  cardNumbers: string;
  cardBrand: string;
  formattedCardNumber: string[];
  errorMessage: string;
}

const useCardNumbers = () => {
  const [cardNumbersInfo, setCardNumbersInfo] = useState<cardNumbersInfoProps>({
    cardNumbers: '',
    cardBrand: '',
    formattedCardNumber: [],
    errorMessage: '',
  });

  const handleCardNumbers = (value: string) => {
    const cardBrand = CardBrandService(value);
    const { errorMessage, errorType } = validateCardNumber(cardBrand, value);

    if (value.length === 0) {
      setCardNumbersInfo({
        cardNumbers: '',
        cardBrand: '',
        formattedCardNumber: [],
        errorMessage: '',
      });
      return;
    }

    if (errorType === 'NonNumeric') {
      setCardNumbersInfo({
        cardNumbers: cardNumbersInfo.cardNumbers,
        cardBrand: cardNumbersInfo.cardBrand,
        formattedCardNumber: cardNumbersInfo.formattedCardNumber,
        errorMessage,
      });
      return;
    }

    if (errorType === 'DinersInvalidLength' && value.length > 14) return;

    if (errorType === 'AMEXInvalidLength' && value.length > 15) return;

    if (value.length > 16) return;

    const formattedCardNumber = formatCardNumbers(cardBrand, value);

    setCardNumbersInfo({
      cardNumbers: value,
      cardBrand: cardBrand,
      formattedCardNumber: formattedCardNumber,
      errorMessage: errorMessage,
    });
  };

  return {
    cardNumbersInfo,
    handleCardNumbers,
  };
};

export default useCardNumbers;
