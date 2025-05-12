import { useState } from 'react';
import { checkCardBrand, formatCardNumber, isNotOverMaxLength, isNumeric } from './utils';
import ERROR_MESSAGE from './constants/ERROR_MESSAGE';

const useCardNumberInput = () => {
  const [cardNumberInputValue, setCardNumberInputValue] = useState('');

  const cardBrand = checkCardBrand(cardNumberInputValue);

  const formattedCardNumber = formatCardNumber(cardNumberInputValue, cardBrand);

  const errorText = (() => {
    if (!isNumeric(cardNumberInputValue)) return ERROR_MESSAGE.IS_NOT_NUMERIC;
    if (!isNotOverMaxLength(cardNumberInputValue, 16)) return ERROR_MESSAGE.IS_OVER_LENGTH;
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
