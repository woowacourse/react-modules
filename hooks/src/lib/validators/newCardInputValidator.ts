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

export const validateCardCompany = (
  value: string,
  defaultValue: string,
): string => {
  if (value === defaultValue) return '카드사를 선택해주세요.';

  return '';
};

export const validateCardExpiration = (value: string, type: string): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (value !== '' && value.length != 2) {
    return '숫자 2개를 입력해주세요.';
  }

  if (
    value !== '' &&
    type === 'MM' &&
    !(Number(value) >= 1 && Number(value) <= 12)
  ) {
    return '월은 1이상 12이하여야 합니다.';
  }

  return '';
};

export const validateUserName = (
  value: string,
  cardUserNameLength: number,
): string => {
  if (value !== '' && !/^[a-zA-Z\s]+$/.test(value)) {
    return '영어만 입력 가능합니다.';
  }

  if (value !== '' && value.length > cardUserNameLength) {
    return `${cardUserNameLength}자까지 입력 가능합니다.`;
  }

  return '';
};

export const validateCVC = (value: string, cardCVCLength: number): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (value !== '' && value.length !== cardCVCLength) {
    return `${cardCVCLength}자리를 입력해주세요.`;
  }

  return '';
};

export const validatePassword = (
  value: string,
  passwordLength: number,
): string => {
  if (value !== '' && Number.isNaN(Number(value))) {
    return '숫자만 입력 가능합니다.';
  }

  if (value !== '' && value.length !== passwordLength) {
    return `${passwordLength}자리를 입력해주세요.`;
  }

  return '';
};
