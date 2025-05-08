import useCardField, { ValidationConfig } from './useCardFields';

export default function useCardNumber() {
  const validationConfig: ValidationConfig = {
    requiredLength: 16,
    errorMessages: {
      onlyNumbers: '카드 번호는 숫자만 입력 가능합니다',
      invalidValue: '유효하지 않은 카드 번호입니다',
      emptyValue: '카드 번호를 입력해주세요',
    },
  };

  const { value, error, handleChange, reset, isValid, getErrorMessage } =
    useCardField(validationConfig);

  const formatCardNumber = (input: string): string => {
    const digitsOnly = input.replace(/\D/g, '');
    const groups = [];

    for (let i = 0; i < digitsOnly.length && i < 16; i += 4) {
      groups.push(digitsOnly.substring(i, i + 4));
    }

    return groups.join(' ');
  };

  const detectCardType = (input: string): string | null => {
    const cardNumber = input.replace(/\D/g, '');

    if (cardNumber.startsWith('4')) return 'Visa';
    if (/^5[1-5]/.test(cardNumber)) return 'Mastercard';

    return null;
  };

  const handleCardNumberChange = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '');

    const limitedInput = digitsOnly.slice(0, 16);

    handleChange(limitedInput);
  };

  return {
    value,
    formattedValue: formatCardNumber(value),
    error,
    handleChange: handleCardNumberChange,
    reset,
    isValid,
    getErrorMessage,
    cardType: detectCardType(value),
  };
}
