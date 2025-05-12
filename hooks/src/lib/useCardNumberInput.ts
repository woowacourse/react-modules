import { useState } from 'react';
import { checkCardBrand, formatCardNumber, isNotOverMaxLength, isNumeric } from './utils';
import ErrorMessage from './constants/ErrorMessage';

const useCardNumberInput = () => {
  const [cardNumberInputValue, setCardNumberInputValue] = useState('');

  const cardBrand = checkCardBrand(cardNumberInputValue);

  const formattedCardNumber = formatCardNumber(cardNumberInputValue, cardBrand);

  const errorText = (() => {
    if (!isNumeric(cardNumberInputValue)) return ErrorMessage.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(cardNumberInputValue, 16)) return ErrorMessage.IS_OVER_LENGTH;
    return '';
  })();

  const isError = errorText !== '';

  return {
    cardNumberInputValue,
    setCardNumberInputValue,
    cardBrand,
    formattedCardNumber,
    errorInfo: { isError, errorText },
  };
};

export default useCardNumberInput;
