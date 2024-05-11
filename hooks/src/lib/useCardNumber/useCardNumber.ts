import { useState } from 'react';

import { CARD_BRAND, CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import useCardNumberValidation from './useCardNumberValidation';
import { checkCardBrand, formattingCardNumbers } from './useCardNumber.util';

type CardFormatType = readonly [number, number, number, number] | readonly [number, number, number];

const useCardNumber = () => {
  const [cardNumbers, setCardNumbers] = useState('');
  const [cardBrand, setCardBrand] = useState('');
  const [cardFormat, setCardFormat] = useState<CardFormatType>(CARD_BRAND.default.format);
  const { cardNumberError, validateCardNumbers } = useCardNumberValidation();

  const handleChangeCardNumber = (value: string) => {
    // formattedCardNumber, '-'와 스페이스를 제거한다.
    value = value.replace(/[\s-]/g, '');
    const { brand, format, length } = checkCardBrand(value);

    if (value.length > length) return;

    const errorType = validateCardNumbers(value.slice(0, length), length);

    if (errorType === CARD_NUMBER_ERROR_TYPE.nonNumeric) return;

    setCardBrand(brand);
    setCardFormat(format as CardFormatType);
    setCardNumbers(value);
  };

  return {
    cardNumbers: formattingCardNumbers(cardNumbers, cardFormat),
    cardBrand,
    cardNumberError,
    handleChangeCardNumber,
  };
};

export default useCardNumber;
