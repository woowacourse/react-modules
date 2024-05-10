import { useState } from 'react';
import Validation from '../utils/Validation';

import ValidationResult from '../types/ValidationResult';
import ErrorMessages from '../types/ErrorMessages';
import GLOBAL_BRANDS from '../constants/globalBrands';

import getCardGlobalBrand from './subfunctions/getCardGlobalBrand';
import formatCardNumber from './subfunctions/formatCardNumber';
import adjustCursorPosition from './subfunctions/adjustCursorPosition';

interface CardNumberValidationResult {
  cardNumber: string;
  cardGlobalBrand: string;
  cardNumberFormat: number[];
  cardNumberFormatted: string;
  validationResult: ValidationResult;
  handleUpdateCardNumber: (inputValue: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CardNumberErrorMessages extends ErrorMessages {
  inputLength: (allowedLength: number) => string;
}

export type GLOBAL_BRANDS_TYPE = keyof typeof GLOBAL_BRANDS;

export const ALLOWED_MAX_LENGTH = Math.max(
  ...Object.values(GLOBAL_BRANDS).map((brand) => brand.allowedLength),
);

export const DEFAULT_PARAMS = {
  initialValue: '',
  errorMessages: {
    inputType: '카드 번호는 각 자릿수에 맞춰 숫자로만 입력해 주세요.',
    inputLength: (length: number) =>
      `해당 브랜드의 카드 번호는 ${length}자로 입력해 주셔야 합니다.`,
  },
};

export default function useCardNumber(
  initialValue: string = DEFAULT_PARAMS.initialValue,
  errorMessages: CardNumberErrorMessages = DEFAULT_PARAMS.errorMessages,
): CardNumberValidationResult {
  const initialCardGlobalBrand = getCardGlobalBrand(initialValue);

  const [cardNumber, setCardNumber] = useState(initialValue);
  const [cardGlobalBrand, setCardGlobalBrand] = useState(initialCardGlobalBrand);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, GLOBAL_BRANDS.Default.allowedLength, errorMessages),
  );

  const handleUpdateCardNumber = (
    inputValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const cardNumber = inputValue.replace(/[^\d]/g, '');
    const cardGlobalBrand = getCardGlobalBrand(cardNumber);
    const { allowedLength, format } = GLOBAL_BRANDS[cardGlobalBrand];

    if (cardNumber.length > allowedLength) return;

    adjustCursorPosition(event, cardNumber, format);

    setCardNumber(cardNumber);
    setCardGlobalBrand(cardGlobalBrand);
    setValidationResult(getValidationResult(cardNumber, allowedLength, errorMessages));
  };

  return {
    cardNumber,
    cardGlobalBrand,
    cardNumberFormat: GLOBAL_BRANDS[cardGlobalBrand].format,
    cardNumberFormatted: formatCardNumber(cardNumber, GLOBAL_BRANDS[cardGlobalBrand].format),
    validationResult,
    handleUpdateCardNumber,
  };
}

function getValidationResult(
  cardNumber: string,
  allowedLength: number,
  errorMessages: CardNumberErrorMessages,
) {
  if (cardNumber.length === 0) {
    return { isValid: null };
  }

  if (!Validation.isNumeric(cardNumber)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  if (!Validation.hasLength(cardNumber, allowedLength)) {
    return { isValid: false, errorMessage: errorMessages.inputLength(allowedLength) };
  }

  return { isValid: true };
}
