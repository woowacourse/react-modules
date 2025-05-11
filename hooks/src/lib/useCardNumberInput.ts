import { useState } from 'react';
import { checkCardBrand, formatCardNumber, isNotOverMaxLength, isNumeric } from './utils';

const useCardNumberInput = () => {
  const [cardNumberInputValue, setCardNumberInputValue] = useState('');

  const cardBrand = checkCardBrand(cardNumberInputValue);

  const formattedCardNumber = formatCardNumber(cardNumberInputValue, cardBrand);

  const errorText = (() => {
    if (!isNumeric(cardNumberInputValue)) return '입력값이 숫자가 아닙니다.';
    if (!isNotOverMaxLength(cardNumberInputValue, 16)) return '입력값이 최대 길이를 초과했습니다.';
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
