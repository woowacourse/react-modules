import { useState } from 'react';
import { REGEX, META_CARD, CardBrand } from './constants';
import useCardType from './useCardType';
import { formatCardNumber } from './../utils/formatCardNumber';

interface CardNumberInfo {
  cardNumber: string[];
  cardType: CardBrand;
  isValid: boolean;
  errorMessages?: string[];
}

const useCardNumber = () => {
  const [cardNumberInfo, setCardNumberInfo] = useState<CardNumberInfo>({
    cardNumber: [],
    cardType: 'None',
    isValid: true,
    errorMessages: [],
  });
  const { handleCardTypeChange } = useCardType();

  const handleCardNumberChange = (cardNumber: string) => {
    const cardNumberWithoutSpace = cardNumber.replace(/\D/g, '');
    const newCardType = handleCardTypeChange(cardNumberWithoutSpace);

    const errors: string[] = [];
    const isNumeric = REGEX.onlyNumber.test(cardNumberWithoutSpace);
    const isValidNumber = cardNumberWithoutSpace.length === META_CARD[newCardType].maxLength;

    if (!isNumeric) {
      errors.push('숫자를 입력해주세요.');
    }

    if (!isValidNumber) {
      errors.push(`${META_CARD[newCardType].maxLength}자리 숫자를 입력해주세요.`);
    }

    setCardNumberInfo({
      cardNumber: formatCardNumber(cardNumberWithoutSpace, META_CARD[newCardType].format),
      cardType: newCardType,
      isValid: isNumeric && isValidNumber,
      errorMessages: errors,
    });
  };

  return { cardNumberInfo, handleCardNumberChange };
};

export default useCardNumber;
export type { CardNumberInfo as CardNumberInfo };
