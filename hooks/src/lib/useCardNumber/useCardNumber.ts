import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';

import ErrorMessages from '../types/ErrorMessages';

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

export const GLOBAL_BRANDS_FORMAT = {
  Diners: { name: 'Diners', allowedLength: 14, format: [4, 6, 4] },
  AMEX: { name: 'AMEX', allowedLength: 15, format: [4, 6, 5] },
  UnionPay: { name: 'UnionPay', allowedLength: 16, format: [4, 4, 4, 4] },
  Visa: { name: 'Visa', allowedLength: 16, format: [4, 4, 4, 4] },
  MasterCard: { name: 'MasterCard', allowedLength: 16, format: [4, 4, 4, 4] },
  Default: { name: 'Default', allowedLength: 16, format: [4, 4, 4, 4] },
};

export type GLOBAL_BRANDS_TYPE = keyof typeof GLOBAL_BRANDS_FORMAT;

export const ALLOWED_MAX_LENGTH = Math.max(
  ...Object.values(GLOBAL_BRANDS_FORMAT).map((brand) => brand.allowedLength),
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
    getValidationResult(initialValue, GLOBAL_BRANDS_FORMAT.Default.allowedLength, errorMessages),
  );

  const handleUpdateCardNumber = (
    inputValue: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const cardNumber = inputValue.replace(/[^\d]/g, '');
    const cardGlobalBrand = getCardGlobalBrand(cardNumber);

    const { allowedLength, format } = GLOBAL_BRANDS_FORMAT[cardGlobalBrand];

    if (cardNumber.length > allowedLength) return;

    const cardNumberFormatted = formatCardNumber(cardNumber, format);

    // 포맷에 따른 공백 추가/제거 상황을 고려하여 커서 위치를 자동으로 조정한다.
    let cursorPosition = event.target.selectionStart ?? 0;
    const inputEvent = event.nativeEvent;

    // 커서를 기준으로 backspace를 눌렀을 때 커서 앞쪽의 문자가 공백이라면 커서를 왼쪽으로 1 옮긴다.
    if (inputEvent instanceof InputEvent && inputEvent.inputType === 'deleteContentBackward') {
      if (cardNumberFormatted[cursorPosition - 1] === ' ') {
        cursorPosition -= 1;
      }
    }

    // 커서를 기준으로 값을 입력했을 떄 커서 앞쪽의 문자가 공백이라면 커서를 오른쪽으로 1 옮긴다.
    if (inputEvent instanceof InputEvent && inputEvent.inputType === 'insertText') {
      if (cardNumberFormatted[cursorPosition - 1] === ' ') {
        cursorPosition += 1;
      }
    }

    // 새 상태값이 input으로 전송될 때 커서 위치가 초기화되는 것을 막는다.
    window.requestAnimationFrame(() => {
      event.target.setSelectionRange(cursorPosition, cursorPosition);
    });

    setCardNumber(cardNumber);
    setCardGlobalBrand(cardGlobalBrand);
    setValidationResult(getValidationResult(cardNumber, allowedLength, errorMessages));
  };

  return {
    cardNumber,
    cardGlobalBrand,
    cardNumberFormat: GLOBAL_BRANDS_FORMAT[cardGlobalBrand].format,
    cardNumberFormatted: formatCardNumber(cardNumber, GLOBAL_BRANDS_FORMAT[cardGlobalBrand].format),
    validationResult,
    handleUpdateCardNumber,
  };
}

function getCardGlobalBrand(cardNumber: string): GLOBAL_BRANDS_TYPE {
  if (cardNumber.length >= 1) {
    const firstDigit = cardNumber[0];
    if (firstDigit === '4') {
      return 'Visa';
    }
  }

  if (cardNumber.length >= 2) {
    const firstTwoDigits = cardNumber.slice(0, 2);
    if (firstTwoDigits === '36') {
      return 'Diners';
    }
    if (firstTwoDigits === '34' || firstTwoDigits === '37') {
      return 'AMEX';
    }
    if (firstTwoDigits >= '51' && firstTwoDigits <= '55') {
      return 'MasterCard';
    }
  }

  if (cardNumber.length >= 3) {
    const firstThreeDigits = cardNumber.slice(0, 3);
    if (firstThreeDigits >= '624' && firstThreeDigits <= '626') {
      return 'UnionPay';
    }
  }

  if (cardNumber.length >= 4) {
    const firstFourDigits = cardNumber.slice(0, 4);
    if (firstFourDigits >= '6282' && firstFourDigits <= '6288') {
      return 'UnionPay';
    }
  }

  if (cardNumber.length >= 6) {
    const firstSixDigits = cardNumber.slice(0, 6);
    if (firstSixDigits >= '622126' && firstSixDigits <= '622925') {
      return 'UnionPay';
    }
  }

  return 'Default';
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

function formatCardNumber(cardNumber: string, format: number[]) {
  const formattedCardNumber = [];
  let targetIndex = 0;

  for (const partLength of format) {
    if (cardNumber.length > targetIndex) {
      formattedCardNumber.push(cardNumber.slice(targetIndex, targetIndex + partLength));
    }
    targetIndex += partLength;
  }

  return formattedCardNumber.join(' ').trim();
}
