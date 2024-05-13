import { CardNumberErrorMessages, GLOBAL_BRANDS_TYPE } from './useCardNumber';
import GLOBAL_BRANDS from '../constants/globalBrands';
import Validation from '../utils/Validation';

export function getValidationResult(
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

export function getCardGlobalBrand(cardNumber: string): GLOBAL_BRANDS_TYPE {
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

  return null;
}

export function getCardFormat(
  cardGlobalBrand: GLOBAL_BRANDS_TYPE,
  defaultCardFormat: { allowedLength: number; format: number[] },
) {
  const { allowedLength, format } = cardGlobalBrand
    ? GLOBAL_BRANDS[cardGlobalBrand]
    : defaultCardFormat;

  return { allowedLength, format };
}

export function formatCardNumber(cardNumber: string, format: number[]) {
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

export function adjustCursorPosition(
  event: React.ChangeEvent<HTMLInputElement>,
  cardNumber: string,
  format: number[],
) {
  const cardNumberFormatted = formatCardNumber(cardNumber, format);
  const cursorPosition = getCursorPosition(event, cardNumberFormatted);

  window.requestAnimationFrame(() => {
    event.target.setSelectionRange(cursorPosition, cursorPosition);
  });
}

function getCursorPosition(
  event: React.ChangeEvent<HTMLInputElement>,
  cardNumberFormatted: string,
): number {
  let cursorPosition = event.target.selectionStart ?? 0;
  const inputEvent = event.nativeEvent;

  if (inputEvent instanceof InputEvent && inputEvent.inputType === 'deleteContentBackward') {
    if (cardNumberFormatted[cursorPosition - 1] === ' ') {
      cursorPosition -= 1;
    }
  }

  if (inputEvent instanceof InputEvent && inputEvent.inputType === 'insertText') {
    if (cardNumberFormatted[cursorPosition - 1] === ' ') {
      cursorPosition += 1;
    }
  }

  return cursorPosition;
}
