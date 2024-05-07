import { useState } from 'react';

import useCardNumberValidation from './useCardNumberValidation';

import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';

import { determineCardBrand } from '../domain/cardBrand/cardBrand';
import { isCardNumberOverLength } from './useCardNumber.util';

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const { cardNumberError, validateCardNumbers } = useCardNumberValidation();

  const handleChangeCardNumber = (value: string) => {
    const cardBrand = determineCardBrand(value);

    const errorType = validateCardNumbers(value, cardBrand);

    if (errorType === CARD_NUMBER_ERROR_TYPE.nonNumeric || isCardNumberOverLength(value, cardBrand)) return;

    setCardNumbers(value);
  };

  return { cardNumbers, cardNumberError, handleChangeCardNumber };
};

export default useCardNumber;
