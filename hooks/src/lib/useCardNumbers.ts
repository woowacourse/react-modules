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

    interface InvalidLengthCheckType {
      [key: string]: number;
      Diners: number;
      AMEX: number;
      default: number;
    }

    const invalidLengthCheck: InvalidLengthCheckType = {
      Diners: 14,
      AMEX: 15,
      default: 16,
    };

    if (
      value.length >
      (invalidLengthCheck[errorType] || invalidLengthCheck.default)
    )
      return;

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
