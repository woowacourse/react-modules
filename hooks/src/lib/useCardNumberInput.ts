import { useMemo } from 'react';
import createCardFieldHook from './utils/createCardFieldHook';
import { validateNumberError } from './utils/cardInputValidations';
import { CardBrand, validationResult } from './card.type';
import { BRAND_LENGTHS } from './card.contant';

function detectBrand(value: string): CardBrand {
  if (/^4/.test(value)) return 'Visa';
  if (/^(5[1-5])/.test(value)) return 'Mastercard';
  if (/^(34|37)/.test(value)) return 'AMEX';
  if (/^36/.test(value)) return 'Diners';
  const prefix6 = parseInt(value.slice(0, 6), 10);
  const prefix3 = parseInt(value.slice(0, 3), 10);
  const prefix4 = parseInt(value.slice(0, 4), 10);
  if (
    (prefix6 >= 622126 && prefix6 <= 622925) ||
    (prefix3 >= 624 && prefix3 <= 626) ||
    (prefix4 >= 6282 && prefix4 <= 6288)
  ) {
    return 'UnionPay';
  }
  return 'Unknown';
}

function validateBrandLength(value: string): validationResult {
  const brand = detectBrand(value);
  const length = BRAND_LENGTHS[brand];
  if (!length) return { isValid: true };

  if (value.length > length) {
    return { isValid: false, errorMessage: `${brand} 카드 번호는 ${length}자리여야 합니다.` };
  }
  return { isValid: true };
}

function formatCardNumber(value: string, brand: CardBrand): string {
  const digits = value.replace(/\D/g, '');
  let groups: number[];
  switch (brand) {
    case 'AMEX':
      groups = [4, 6, 5];
      break;
    case 'Diners':
      groups = [4, 6, 4];
      break;
    default:
      groups = [4, 4, 4, 4];
  }
  const parts: string[] = [];
  let start = 0;
  for (const len of groups) {
    if (start >= digits.length) break;
    parts.push(digits.slice(start, start + len));
    start += len;
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
