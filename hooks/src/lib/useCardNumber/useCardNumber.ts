import { useState } from 'react';

import useCardNumberValidation from './useCardNumberValidation';

import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';

import { determineCardBrand } from '../domain/cardBrand/cardBrand';
import { formatCardNumber, isCardNumberOverLength } from './useCardNumber.util';

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const { cardNumberError, validateCardNumbers } = useCardNumberValidation();

  const handleChangeCardNumber = (value: string) => {
    const cardBrand = determineCardBrand(value);

    const errorType = validateCardNumbers(value, cardBrand);

    if (isCardNumberOverLength(value, cardBrand) || errorType === CARD_NUMBER_ERROR_TYPE.nonNumeric) return;

    setCardNumbers(value);
  };

  const formattedCardNumbers = formatCardNumber(cardNumbers, determineCardBrand(cardNumbers));

  return { cardNumbers: formattedCardNumbers, cardNumberError, handleChangeCardNumber };
};

export default useCardNumber;
