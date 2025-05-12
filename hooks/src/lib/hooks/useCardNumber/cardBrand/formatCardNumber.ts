import type { CardBrand } from './constant';

const CARD_BRAND_FORMAT_RULES = {
  Visa: [4, 4, 4, 4],
  MasterCard: [4, 4, 4, 4],
  Diners: [4, 6, 4],
  AMEX: [4, 6, 5],
  UnionPay: [4, 4, 4, 4],
  Unknown: [4, 4, 4, 4],
} as const;

export const formatCardNumber = ({ type, cardNumber }: { type: CardBrand; cardNumber: string }) => {
  const formattedCardNumber = CARD_BRAND_FORMAT_RULES[type]
    .map((length) => {
      const chunk = cardNumber.slice(0, length);
      cardNumber = cardNumber.slice(length);
      return chunk;
    })
    .filter(Boolean);

  return formattedCardNumber.join(' ');
};
