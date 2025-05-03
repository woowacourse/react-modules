interface CardNumberInput {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

export interface CardNumberValidationResult {
  isValid: { [key in keyof CardNumberInput]: boolean };
  message: string;
}

export const validateCardNumber = (numbers: CardNumberInput): CardNumberValidationResult => {
  let hasError = false;
  let message = '';

  const result: CardNumberValidationResult['isValid'] = {
    input1: true,
    input2: true,
    input3: true,
    input4: true,
  };

  if (!isValidFirstCardNumber(numbers.input1)) {
    result.input1 = false;
    message = '첫번째 카드 번호는 4 또는 51~55 사이의 숫자여야 합니다.';
    hasError = true;
  }

  (Object.entries(numbers) as [keyof CardNumberInput, string][]).forEach(([key, value]) => {
    if (!isNumber(value)) {
      result[key] = false;
      if (!hasError) {
        message = '카드 번호는 숫자만 입력해주세요.';
        hasError = true;
      }
    } else if (!isFourDigits(value)) {
      result[key] = false;
      if (!hasError) {
        message = '카드 번호는 4자리로 입력해주세요.';
        hasError = true;
      }
    }
  });

  return { isValid: result, message };
};

const isNumber = (value: string) => !Number.isNaN(Number(value));
const isFourDigits = (value: string) => value.length === 4;
const isValidFirstCardNumber = (value: string) => {
  if (!/^\d+$/.test(value)) return false;
  if (value.startsWith('4')) return true;
  const prefix = Number(value.slice(0, 2));
  return prefix >= 51 && prefix <= 55;
};
