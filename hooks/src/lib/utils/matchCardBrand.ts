import { CardBrandType } from '../type/card';

const VISA_CARD_FIRST_DIGIT = '4';
const MASTER_CARD_MIN_TWO_DIGITS = 51;
const MASTER_CARD_MAX_TWO_DIGITS = 55;
const DINERS_CARD_FIRST_TWO_DIGITS = '36';
const AMEX_CARD_FIRST_TWO_DIGITS = '34';
const AMEX_CARD_SECOND_TWO_DIGITS = '37';
const UNIONPAY_CARD_FIRST_TWO_DIGITS = '62';

export const matchCardBrand = (input1: string, input2: string): CardBrandType => {
  const twoDigits = input1.slice(0, 2);
  if (twoDigits[0] === VISA_CARD_FIRST_DIGIT) {
    return 'Visa';
  } else if (Number(twoDigits) >= MASTER_CARD_MIN_TWO_DIGITS && Number(twoDigits) <= MASTER_CARD_MAX_TWO_DIGITS) {
    return 'Master';
  } else if (twoDigits === DINERS_CARD_FIRST_TWO_DIGITS) {
    return 'Diners';
  } else if (twoDigits === AMEX_CARD_FIRST_TWO_DIGITS || twoDigits === AMEX_CARD_SECOND_TWO_DIGITS) {
    return 'AMEX';
  } else if (twoDigits === UNIONPAY_CARD_FIRST_TWO_DIGITS) {
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
