import { matchCardBrand } from '../utils/matchCardBrand';

const EXP_FOR_VALID_NUMBER = /^\d+$/;

interface CardNumberInput {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

export const validateCardNumber = (cardNumbers: CardNumberInput) => {
  let hasError = false;
  let message = '';

  const isValid = {
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  };

  const firstCardNumberCheck = isValidFirstCardNumber(cardNumbers.input1, cardNumbers.input2);
  if (!firstCardNumberCheck.isValid) {
    isValid.input1 = false;
    message = firstCardNumberCheck.message;
    hasError = true;
    return { isValid, message };
  }

  const digitCheck = validateDigits(cardNumbers);
  isValid.input1 = digitCheck.isValid.input1;
  isValid.input2 = digitCheck.isValid.input2;
  isValid.input3 = digitCheck.isValid.input3;
  isValid.input4 = digitCheck.isValid.input4;

  if (!hasError && digitCheck.message) {
    message = digitCheck.message;
    hasError = true;
  }

  return { isValid, message };
};

const isValidFirstCardNumber = (input1: string, input2: string): { isValid: boolean; message: string } => {
  if (!EXP_FOR_VALID_NUMBER.test(input1)) {
    return { isValid: false, message: '숫자만 입력해주세요.' };
  }

  if (input1.length < 2) {
    return { isValid: true, message: '' };
  }

  return { isValid: true, message: '' };
};

const validateDigits = (cardNumbers: CardNumberInput) => {
  const { input1, input2 } = cardNumbers;
  const entries = Object.entries(cardNumbers) as [keyof CardNumberInput, string][];
  const cardBrand = matchCardBrand(input1, input2);

  const isValid: { [K in keyof CardNumberInput]: boolean } = {
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  };
  let message = '';
  let hasError = false;

  const setInvalid = (key: keyof CardNumberInput, msg: string) => {
    isValid[key] = false;
    if (!hasError) {
      message = msg;
      hasError = true;
    }
  };

  if (['Visa', 'Master', 'UnionPay', 'Unknown'].includes(cardBrand)) {
    for (const [key, value] of entries) {
      if (!EXP_FOR_VALID_NUMBER.test(value)) {
        setInvalid(key, '카드 번호는 숫자만 입력해주세요.');
      } else if (value.length !== 4) {
        setInvalid(key, '카드 번호는 4자리로 입력해주세요.');
      }
    }
  } else if (cardBrand === 'Diners') {
    const result = validateDinersDigits(cardNumbers);
    isValid[result.invalidKey as keyof CardNumberInput] = false;
    message = result.message;
    hasError = true;
  } else if (cardBrand === 'AMEX') {
    const result = validateAmexDigits(cardNumbers);
    isValid[result.invalidKey as keyof CardNumberInput] = false;
    message = result.message;
    hasError = true;
  }

  return { isValid, message };
};

const validateDinersDigits = ({ input1, input2, input3, input4 }) => {
  if (input1.length !== 4) {
    return {
      isValid: false,
      invalidKey: 'input1',
      message: 'Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }
  if (input2.length !== 6) {
    return {
      isValid: false,
      invalidKey: 'input2',
      message: 'Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }
  if (input3.length !== 4) {
    return {
      isValid: false,
      invalidKey: 'input3',
      message: 'Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }
  if (input4.length !== 0) {
    return {
      isValid: false,
      invalidKey: 'input4',
      message: 'Diners 카드: 36으로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }

  return { isValid: true, invalidKey: '', message: '' };
};

const validateAmexDigits = ({ input1, input2, input3, input4 }) => {
  if (input1.length !== 4) {
    return {
      isValid: false,
      invalidKey: 'input1',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.',
    };
  }
  if (input2.length !== 6) {
    return {
      isValid: false,
      invalidKey: 'input2',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.',
    };
  }
  if (input3.length !== 5) {
    return {
      isValid: false,
      invalidKey: 'input3',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.',
    };
  }
  if (input4.length !== 0) {
    return {
      isValid: false,
      invalidKey: 'input4',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-***** 형식으로 입력해주세요.',
    };
  }

  return { isValid: true, invalidKey: '', message: '' };
};
