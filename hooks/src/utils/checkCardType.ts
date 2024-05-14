import { REGEX } from './../lib/constants';

export const checkCardType = (value: string) => {
  if (REGEX.visa.test(value)) return 'Visa';
  else if (REGEX.mastercard.test(value)) return 'Mastercard';
  else if (REGEX.diners.test(value)) return 'Diners';
  else if (REGEX.amex.test(value)) return 'AMEX';
  else if (REGEX.unionpay.test(value)) return 'Unionpay';
  else return 'None';
};
