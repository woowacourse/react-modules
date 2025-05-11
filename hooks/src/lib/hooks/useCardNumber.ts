import useCardField, { ValidationConfig } from './useCardFields';
import { CARD_TYPES, CardType } from '../constants/cardTypes';
import {
  CARD_NUMBER,
  CARD_LENGTH,
  CARD_FORMAT,
} from '../constants/cardConstants';

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

  const formatCardNumber = (input: string): string => {
    const digitsOnly = input.replace(/\D/g, '');
    const cardType = detectCardType(digitsOnly);
    if (!cardType) return digitsOnly;

    const format = CARD_FORMAT[cardType];
    const groups = [];
    let currentIndex = 0;

    for (const groupSize of format.GROUPS) {
      if (currentIndex >= digitsOnly.length) break;
      groups.push(digitsOnly.substring(currentIndex, currentIndex + groupSize));
      currentIndex += groupSize;
    }

    return groups.join(format.SEPARATOR);
  };

  const detectCardType = (input: string): CardType | null => {
    const cardNumber = input.replace(/\D/g, '');

    if (cardNumber.startsWith(CARD_NUMBER.VISA_START)) {
      return CARD_TYPES.VISA;
    }

    if (
      CARD_NUMBER.MASTERCARD_START.some((start) => cardNumber.startsWith(start))
    ) {
      return CARD_TYPES.MASTERCARD;
    }

    if (CARD_NUMBER.AMEX_START.some((start) => cardNumber.startsWith(start))) {
      return CARD_TYPES.AMEX;
    }

    if (cardNumber.startsWith(CARD_NUMBER.DINERS_START)) {
      return CARD_TYPES.DINERS;
    }

    const unionPayRanges = [
      CARD_NUMBER.UNIONPAY_START.RANGE_1,
      CARD_NUMBER.UNIONPAY_START.RANGE_2,
      CARD_NUMBER.UNIONPAY_START.RANGE_3,
    ];

    for (const range of unionPayRanges) {
      const start = parseInt(range.START);
      const end = parseInt(range.END);
      const prefix = parseInt(cardNumber.substring(0, range.START.length));

      if (prefix >= start && prefix <= end) {
        return CARD_TYPES.UNIONPAY;
      }
    }

    return null;
  };

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
