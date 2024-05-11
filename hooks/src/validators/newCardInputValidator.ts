import { CARD_TYPES, ERROR_MESSAGES, ERROR_TYPES } from '../constants/card';

export const validateCardNumber = (brand: string, value: string) => {
  switch (brand) {
    case 'None':
      if (Number.isNaN(Number(value))) {
        return {
          errorMessage: ERROR_MESSAGES.ONLY_NUMBERS,
          errorType: ERROR_TYPES.NON_NUMERIC,
        };
      }
      if (value.length !== CARD_TYPES.NONE.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.STANDARD_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_DEFAULT,
        };
      }
      break;
    case 'Visa':
      if (Number.isNaN(Number(value))) {
        return {
          errorMessage: ERROR_MESSAGES.ONLY_NUMBERS,
          errorType: ERROR_TYPES.NON_NUMERIC,
        };
      }
      if (value.length !== CARD_TYPES.VISA.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.VISA_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_DEFAULT,
        };
      }
      break;
    case 'Master':
      if (Number.isNaN(Number(value))) {
        return {
          errorMessage: ERROR_MESSAGES.ONLY_NUMBERS,
          errorType: ERROR_TYPES.NON_NUMERIC,
        };
      }
      if (value.length !== CARD_TYPES.MASTER.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.MASTER_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_DEFAULT,
        };
      }
      break;
    case 'Diners':
      if (value.length !== CARD_TYPES.DINERS.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.DINERS_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_DINERS,
        };
      }
      break;
    case 'AMEX':
      if (value.length !== CARD_TYPES.AMEX.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.AMEX_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_AMEX,
        };
      }
      break;
    case 'UnionPay':
      if (value.length !== CARD_TYPES.UNION_PAY.INPUT_COUNT) {
        return {
          errorMessage: ERROR_MESSAGES.UNIONPAY_CARD_LENGTH,
          errorType: ERROR_TYPES.INVALID_LENGTH_UNIONPAY,
        };
      }
      break;
  }
  return {
    errorMessage: ERROR_MESSAGES.NO_ERROR,
    errorType: ERROR_TYPES.NO_ERROR,
  };
};
