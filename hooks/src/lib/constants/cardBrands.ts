export interface CardBrand {
  name: string;
  format: number[]; // 포맷팅 구조
  length: number; // 전체 길이
}

export const CARD_BRANDS: CardBrand[] = [
  {
    name: 'default',
    format: [4, 4, 4, 4],
    length: 16,
  },
  {
    name: 'amex',
    format: [4, 6, 5],
    length: 15,
  },
  {
    name: 'diners',
    format: [4, 6, 4],
    length: 14,
  },
  {
    name: 'unionpay',
    format: [4, 4, 4, 4],
    length: 16,
  },
  {
    name: 'visa',
    format: [4, 4, 4, 4],
    length: 16,
  },
  {
    name: 'mastercard',
    format: [4, 4, 4, 4],
    length: 16,
  },
];
