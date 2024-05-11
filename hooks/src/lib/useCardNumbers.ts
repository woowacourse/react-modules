import { useState } from 'react';
import { validateCardNumber } from '../validators/newCardInputValidator';
import CardBrandService from '../domain/CardBrandService';
import formatCardNumbers from '../utils/formatCardNumbers';
import { CARD_TYPES } from '../constants/card';

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
      Diners: CARD_TYPES.DINERS.INPUT_COUNT,
      AMEX: CARD_TYPES.AMEX.INPUT_COUNT,
      default: CARD_TYPES.NONE.INPUT_COUNT,
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
