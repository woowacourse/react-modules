import useCardField, { ValidationConfig } from './useCardFields';
import { CARD_LENGTH } from '../constants/cardConstants';
import { formatCardNumber, detectCardType } from '../utils/cardUtils';

export default function useCardNumber() {
  const validationConfig: ValidationConfig = {
    requiredLength: CARD_LENGTH.VISA,
    errorMessages: {
      onlyNumbers: '카드 번호는 숫자만 입력 가능합니다',
      invalidValue: '유효하지 않은 카드 번호입니다',
      emptyValue: '카드 번호를 입력해주세요',
    },
  };

  const { value, error, handleChange, reset, getErrorMessage } =
    useCardField(validationConfig);

  const handleCardNumberChange = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '');
    const cardType = detectCardType(digitsOnly);
    const maxLength = cardType ? CARD_LENGTH[cardType] : CARD_LENGTH.VISA;

    const limitedInput = digitsOnly.slice(0, maxLength);
    handleChange(limitedInput);
  };

  const isCardNumberValid = (): boolean => {
    const cardType = detectCardType(value);
    if (!cardType) return false;

    const requiredLength = CARD_LENGTH[cardType];
    return value.length === requiredLength;
  };

  return {
    value,
    formattedValue: formatCardNumber(value),
    error,
    handleChange: handleCardNumberChange,
    reset,
    isValid: isCardNumberValid,
    getErrorMessage,
    cardType: detectCardType(value),
  };
}
