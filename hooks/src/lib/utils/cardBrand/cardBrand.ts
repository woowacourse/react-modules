import { startsWithin } from '../string';

export const isDinersCardNumber = (value: string) => {
  return value.startsWith('36');
};

export const isAmexCardNumber = (value: string) => {
  return value.startsWith('34') || value.startsWith('37');
};

export const isUnionPayCardNumber = (value: string) => {
  return (
    startsWithin({ from: '622126', to: '622925', value }) ||
    startsWithin({ from: '624', to: '626', value }) ||
    startsWithin({ from: '6282', to: '6288', value })
  );
};

export const isVisaCardNumber = (value: string) => {
  return value.startsWith('4');
};

export const isMasterCardNumber = (value: string) => {
  return startsWithin({ from: '50', to: '55', value });
};

export const determineCardBrand = (cardNumber: string) => {
  if (isDinersCardNumber(cardNumber)) return 'diners';

  if (isAmexCardNumber(cardNumber)) return 'amex';

  if (isUnionPayCardNumber(cardNumber)) return 'unionPay';

  if (isVisaCardNumber(cardNumber)) return 'visa';

  if (isMasterCardNumber(cardNumber)) return 'master';

  return 'none';
};
