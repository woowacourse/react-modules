import { CardBrand } from '../types/card';

const CARD_LENGTH_RULES: Record<string, number> = {
  visa: 16,
  master: 16,
  diners: 14,
  amex: 15,
  unionpay: 16,
};

export function validateCardBrandLength(cardBrand: CardBrand, cardNumber: string): string | null {
  const requiredLength = CARD_LENGTH_RULES[cardBrand];

  if (!cardNumber) return null;

  if (!cardBrand && cardNumber.length !== 16 && cardNumber.length > 0) {
    return '카드 번호는 16자리여야 합니다.';
  }

  if (requiredLength && cardNumber.length !== requiredLength) {
    return `${cardBrand} 카드는 ${requiredLength}자리여야 합니다.`;
  }

  return null;
}
