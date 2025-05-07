import { CardBrandType } from '../type/card';

export const matchCardBrand = (cardNumber: string): CardBrandType => {
  const twoDigits = cardNumber.slice(0, 2);
  if (twoDigits[0] === '4') {
    return 'Visa';
  } else if (Number(twoDigits) >= 51 && Number(twoDigits) <= 55) {
    return 'Master';
  } else if (twoDigits === '36') {
    return 'Diners';
  } else if (twoDigits === '34' || twoDigits === '37') {
    return 'AMEX';
  } else if (twoDigits === '62') {
    const threeDigits = Number(cardNumber.slice(0, 3));
    const fourDigits = Number(cardNumber.slice(0, 4));
    if (
      (Number(cardNumber) >= 622126 && Number(cardNumber) <= 622925) ||
      (threeDigits >= 624 && threeDigits <= 626) ||
      (fourDigits >= 6282 && fourDigits <= 6288)
    ) {
      return 'UnionPay';
    }
  }

  return 'Unknown';
};
