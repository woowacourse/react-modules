import { CardBrandType } from '../type/card';

export const matchCardBrand = (input1: string, input2: string): CardBrandType => {
  const twoDigits = input1.slice(0, 2);
  if (twoDigits[0] === '4') {
    return 'Visa';
  } else if (Number(twoDigits) >= 51 && Number(twoDigits) <= 55) {
    return 'Master';
  } else if (twoDigits === '36') {
    return 'Diners';
  } else if (twoDigits === '34' || twoDigits === '37') {
    return 'AMEX';
  } else if (twoDigits === '62') {
    const sixDigits = Number(input1 + input2.slice(0, 2));
    const threeDigits = Number(input1.slice(0, 3));
    const fourDigits = Number(input1.slice(0, 4));
    if (
      (sixDigits >= 622126 && sixDigits <= 622925) ||
      (threeDigits >= 624 && threeDigits <= 626) ||
      (fourDigits >= 6282 && fourDigits <= 6288)
    ) {
      return 'UnionPay';
    }
  }

  return 'Unknown';
};
