import { CARD_TYPE } from '../constants/Condition';
import type { CardType } from '../types/common.type';

export const getCardType = (cardNumber: string): CardType => {
  const firstDigits = cardNumber.charAt(0);
  const secondDigits = cardNumber.slice(0, 2);
  const thirdDigits = cardNumber.slice(0, 3);
  const fourthDigits = cardNumber.slice(0, 4);
  const sixthDigits = cardNumber.slice(0, 6);

  if (firstDigits === '4') return 'VISA';

  if (firstDigits === '3') {
    if (secondDigits === '36') return 'DINERS';
    if (secondDigits === '34' || secondDigits === '37') return 'AMEX';
  }

  if (firstDigits === '5' && Number(secondDigits) >= 51 && Number(secondDigits) <= 55)
    return 'MASTERCARD';

  if (firstDigits === '6') {
    if (Number(thirdDigits) >= 624 && Number(thirdDigits) <= 626) return 'UNIONPAY';
    if (thirdDigits === '622' && Number(sixthDigits) >= 622126 && Number(sixthDigits) <= 622925)
      return 'UNIONPAY';
    if (thirdDigits === '628' && Number(fourthDigits) >= 6282 && Number(fourthDigits) >= 6288)
      return 'UNIONPAY';
  }

  return 'DEFAULT';
};

export const formatCardNumber = (cardType: CardType, cardNumber: string) => {
  const formattedCardNumber: string[] = [];

  let index = 0;

  CARD_TYPE[cardType].PATTERN.forEach((length) => {
    formattedCardNumber.push(cardNumber.slice(index, (index += length)));
  });

  return formattedCardNumber.filter(Boolean).join(' ');
};
