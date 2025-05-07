import { matchCardBrand } from '../utils/matchCardBrand';

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
  if (!digitCheck.isValid) {
    isValid[digitCheck.invalidKey] = false;
    if (!hasError) {
      message = digitCheck.message;
      hasError = true;
    }
  }

  return { isValid, message };
};

const isValidFirstCardNumber = (input1: string, input2: string): { isValid: boolean; message: string } => {
  if (!/^\d+$/.test(input1)) {
    return { isValid: false, message: '숫자만 입력해주세요.' };
  }

  if (input1.length < 2) {
    return { isValid: true, message: '' };
  }

  const cardBrand = matchCardBrand(input1, input2);
  const firstTwo = Number(input1.slice(0, 2));

  if (cardBrand === 'Master' && (firstTwo < 51 || firstTwo > 55)) {
    return {
      isValid: false,
      message: 'MasterCard: 51 ~ 55로 시작하는 16자리 숫자를 입력해주세요.',
    };
  }

  return { isValid: true, message: '' };
};

const validateDigits = (cardNumbers: CardNumberInput) => {
  const { input1, input2, input3, input4 } = cardNumbers;
  const entries = Object.entries(cardNumbers) as [keyof CardNumberInput, string][];

  const cardBrand = matchCardBrand(input1, input2);

  if (['Visa', 'Master', 'UnionPay', 'Unknown'].includes(cardBrand)) {
    for (const [key, value] of entries) {
      if (!/^\d+$/.test(value)) {
        return {
          isValid: false,
          invalidKey: key,
          message: '카드 번호는 숫자만 입력해주세요.',
        };
      }

      if (value.length !== 4) {
        return {
          isValid: false,
          invalidKey: key,
          message: '카드 번호는 4자리로 입력해주세요.',
        };
      }
    }
  } else if (cardBrand === 'Diners') {
    return validateDinersDigits({ input1, input2, input3, input4 });
  } else if (cardBrand === 'AMEX') {
    return validateAmexDigits({ input1, input2, input3, input4 });
  }

  return { isValid: true, invalidKey: '', message: '' };
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
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }
  if (input2.length !== 6) {
    return {
      isValid: false,
      invalidKey: 'input2',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }

  if (input3.length !== 5) {
    return {
      isValid: false,
      invalidKey: 'input3',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }

  if (input4.length !== 0) {
    return {
      isValid: false,
      invalidKey: 'input4',
      message: 'AMEX 카드: 34 또는 37로 시작할 경우 ****-******-**** 형식으로 입력해주세요.',
    };
  }

  return { isValid: true, invalidKey: '', message: '' };
};
