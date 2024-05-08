import { useState } from 'react';

import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import useCardNumberValidation from './useCardNumberValidation';
import { checkCardBrand, formattingCardNumbers } from './useCardNumber.util';

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const { cardNumberError, validateCardNumbers } = useCardNumberValidation();

  const handleChangeCardNumber = (value: string) => {
    value = value.replace(/[\s-]/g, '');
    const cardBrand = checkCardBrand(value);

    if (value.length > cardBrand.length) return;

    const errorType = validateCardNumbers(value.slice(0, cardBrand.length), cardBrand.length);

    if (errorType === CARD_NUMBER_ERROR_TYPE.nonNumeric) return;

    setCardNumbers(value);
  };

  return {
    cardNumbers: formattingCardNumbers(cardNumbers, checkCardBrand(cardNumbers).format),
    cardNumberError,
    handleChangeCardNumber,
  };
};

export default useCardNumber;
