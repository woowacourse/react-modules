export const validateCardNumber = (brand: string, value: string) => {
  switch (brand) {
    case 'None':
      if (Number.isNaN(Number(value))) {
        return {
          errorMessage: '숫자만 입력 가능합니다.',
          errorType: 'NonNumeric',
        };
      }
      if (value.length !== 16) {
        return {
          errorMessage: '일반 카드는 16자리 숫자여야 합니다.',
          errorType: 'NoneInvalidLength',
        };
      }
      break;
    case 'Diners':
      if (value.length !== 14) {
        return {
          errorMessage: 'Diners 카드는 14자리 숫자여야 합니다.',
          errorType: 'DinersInvalidLength',
        };
      }
      break;
    case 'AMEX':
      if (value.length !== 15) {
        return {
          errorMessage: 'AMEX 카드는 15자리 숫자여야 합니다.',
          errorType: 'AMEXInvalidLength',
        };
      }
      break;
    case 'UnionPay':
      if (value.length !== 16) {
        return {
          errorMessage: 'UnionPay 카드는 16자리 숫자여야 합니다.',
          errorType: 'UnionPayInvalidLength',
        };
      }
      break;
  }
  return {
    errorMessage: '',
    errorType: 'NoError',
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
