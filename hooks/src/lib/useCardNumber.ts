import { useState } from 'react';
import { META_CARD, CardBrand } from './constants';
import { formatCardNumber } from './../utils/formatCardNumber';
import { checkCardType } from './../utils/checkCardType';

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

  const handleCardNumberChange = (cardNumber: string) => {
    const cardNumberWithoutSpace = cardNumber.replace(/\D/g, '');
    const newCardType = checkCardType(cardNumberWithoutSpace);
    const formattedNumber = formatCardNumber(cardNumberWithoutSpace, META_CARD[newCardType].format);

    const errors: string[] = [];
    const isValidNumber = formattedNumber.join('').length === META_CARD[newCardType].maxLength;

    if (!isValidNumber) {
      errors.push(`${META_CARD[newCardType].maxLength}자리 숫자를 입력해주세요.`);
    }

    setCardNumberInfo({
      cardNumber: formattedNumber,
      cardType: newCardType,
      isValid: isValidNumber,
      errorMessages: errors,
    });
  };

  return { cardNumberInfo, handleCardNumberChange };
};

export default useCardNumber;
export type { CardNumberInfo as CardNumberInfo };
