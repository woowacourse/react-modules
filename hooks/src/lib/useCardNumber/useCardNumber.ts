import { useState } from 'react';
import Validation from '../utils/Validation';

import ValidationResult from '../types/ValidationResult';
import ErrorMessages from '../types/ErrorMessages';
import GLOBAL_BRANDS from '../constants/globalBrands';

import {
  adjustCursorPosition,
  formatCardNumber,
  getCardGlobalBrand,
  getCardFormat,
} from './useCardNumber.util';

interface CardNumberParams {
  initialValue?: string;
  defaultCardFormat?: { allowedLength: number; format: number[] };
  errorMessages?: CardNumberErrorMessages;
}

interface CardNumberValidationResult {
  cardNumber: string;
  cardGlobalBrand: string | null;
  cardNumberFormat: number[];
  cardNumberFormatted: string;
  validationResult: ValidationResult;
  handleUpdateCardNumber: (inputValue: string, event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CardNumberErrorMessages extends ErrorMessages {
  inputLength: (allowedLength: number) => string;
}

export type GLOBAL_BRANDS_TYPE = keyof typeof GLOBAL_BRANDS | null;

export const ALLOWED_MAX_LENGTH = Math.max(
  ...Object.values(GLOBAL_BRANDS).map((brand) => brand.allowedLength),
);

export const DEFAULT_PARAMS = {
  initialValue: '',
  defaultCardFormat: {
    allowedLength: 16,
    format: [4, 4, 4, 4],
  },
  errorMessages: {
    inputType: '카드 번호는 각 자릿수에 맞춰 숫자로만 입력해 주세요.',
    inputLength: (length: number) =>
      `해당 브랜드의 카드 번호는 ${length}자로 입력해 주셔야 합니다.`,
  },
};

export default function useCardNumber({
  initialValue = DEFAULT_PARAMS.initialValue,
  defaultCardFormat = DEFAULT_PARAMS.defaultCardFormat,
  errorMessages = DEFAULT_PARAMS.errorMessages,
}: CardNumberParams = {}): CardNumberValidationResult {
  const [cardNumber, setCardNumber] = useState(initialValue);
  const [cardGlobalBrand, setCardGlobalBrand] = useState(getCardGlobalBrand(initialValue));

  const { allowedLength, format } = getCardFormat(cardGlobalBrand, defaultCardFormat);
  const cardNumberFormatted = formatCardNumber(cardNumber, format);

  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, allowedLength, errorMessages),
  );

  const handleUpdateCardNumber = (
    inputValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const cardNumber = inputValue.replace(/[^\d]/g, '');
    const cardGlobalBrand = getCardGlobalBrand(cardNumber);
    const { allowedLength, format } = getCardFormat(cardGlobalBrand, defaultCardFormat);

    if (cardNumber.length > allowedLength) return;

    adjustCursorPosition(event, cardNumber, format);

    setCardNumber(cardNumber);
    setCardGlobalBrand(cardGlobalBrand);
    setValidationResult(getValidationResult(cardNumber, allowedLength, errorMessages));
  };

  return {
    cardNumber,
    cardGlobalBrand,
    cardNumberFormat: format,
    cardNumberFormatted,
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
