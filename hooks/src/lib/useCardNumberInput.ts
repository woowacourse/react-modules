import { useMemo } from 'react';
import createCardFieldHook from './utils/createCardFieldHook';
import { validateNumberError } from './utils/cardInputValidations';
import { CardBrand, validationResult } from './card.type';
import { BRAND_LENGTHS, CARD_GROUPS, CARD_PATTERNS } from './card.contant';
import isUnionPay from './utils/isUnionPay';

function detectBrand(value: string): CardBrand {
  if (CARD_PATTERNS.VISA.test(value)) return 'Visa';
  if (CARD_PATTERNS.MASTERCARD.test(value)) return 'Mastercard';
  if (CARD_PATTERNS.AMEX.test(value)) return 'AMEX';
  if (CARD_PATTERNS.DINERS.test(value)) return 'Diners';
  if (isUnionPay(value)) return 'UnionPay';

  return 'Unknown';
}

function validateBrandLength(value: string): validationResult {
  const brand = detectBrand(value);
  const expectedLength = BRAND_LENGTHS[brand];

  if (!expectedLength) return { isValid: true };

  if (value.length > expectedLength) {
    return {
      isValid: false,
      errorMessage: `${brand} 카드 번호는 ${expectedLength}자리여야 합니다.`,
    };
  }

  return { isValid: true };
}

function formatCardNumber(value: string, brand: CardBrand): string {
  const digits = value.replace(/\D/g, '');
  const groups = CARD_GROUPS[brand];

  const parts: string[] = [];
  let start = 0;

  for (const length of groups) {
    if (start >= digits.length) break;
    parts.push(digits.slice(start, start + length));
    start += length;
  }

  return parts.join(' ');
}

export function useCardNumberInput(): {
  cardNumber: string;
  formattedCardNumber: string;
  brand: CardBrand;
  cardNumberError: string;
  handleCardNumberChange: (newValue: string) => void;
} {
  const { value, handleChange, errorMessage } = createCardFieldHook<string>('', [
    validateNumberError,
    validateBrandLength,
  ]);

  const brand = useMemo(() => detectBrand(value), [value]);
  const formattedValue = useMemo(() => formatCardNumber(value, brand), [value, brand]);

  return {
    cardNumber: value,
    formattedCardNumber: formattedValue,
    brand,
    cardNumberError: errorMessage,
    handleCardNumberChange: handleChange,
  };
}
