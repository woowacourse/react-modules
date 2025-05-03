interface CardNumberInput {
  input1: string;
  input2: string;
  input3: string;
  input4: string;
}

interface validateCardNumberProps {
  numbers: CardNumberInput;
  isValid: { [key in keyof CardNumberInput]: boolean };
  setIsValid: (isValid: { [key in keyof CardNumberInput]: boolean }) => void;
  setErrorMessage: (message: string) => void;
}

export const validateCardNumber = ({ numbers, isValid, setIsValid, setErrorMessage }: validateCardNumberProps) => {
  let hasError = false;
  let message = '';

  const newIsValid = { ...isValid };

  if (!isValidFirstCardNumber(numbers.input1)) {
    newIsValid.input1 = false;
    message = '첫번째 카드 번호는 4 또는 51~55 사이의 숫자여야 합니다.';
    hasError = true;
  } else {
    newIsValid.input1 = true;
  }

  (Object.entries(numbers) as [keyof CardNumberInput, string][]).forEach(([key, value]) => {
    if (!isNumber(value)) {
      newIsValid[key] = false;
      if (!hasError) {
        message = '카드 번호는 숫자만 입력해주세요.';
        hasError = true;
      }
    } else if (!isFourDigits(value)) {
      newIsValid[key] = false;
      if (!hasError) {
        message = '카드 번호는 4자리로 입력해주세요.';
        hasError = true;
      }
    } else if (key !== 'input1') {
      newIsValid[key] = true;
    }
  });

  setIsValid(newIsValid);
  setErrorMessage(message);
};

const isNumber = (value: string) => !Number.isNaN(Number(value));

const isFourDigits = (value: string) => value.length === 4;

const isValidFirstCardNumber = (value: string) => {
  if (!/^\d+$/.test(value)) return false;
  if (value.startsWith('4')) return true;
  const prefix = Number(value.slice(0, 2));
  return prefix >= 51 && prefix <= 55;
};
