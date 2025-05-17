export interface CardBrand {
  name: string;
  format: number[]; // 포맷팅 구조
  length: number; // 전체 길이
  startNumbers: Array<number | [number, number]>;
}

export const CARD_BRANDS: CardBrand[] = [
  {
    name: 'default',
    format: [4, 4, 4, 4],
    length: 16,
    startNumbers: [],
  },
  {
    name: 'amex',
    format: [4, 6, 5],
    length: 15,
    startNumbers: [34, 37],
  },
  {
    name: 'diners',
    format: [4, 6, 4],
    length: 14,
    startNumbers: [36],
  },
  {
    name: 'unionpay',
    format: [4, 4, 4, 4],
    length: 16,
    startNumbers: [
      [624, 626],
      [6282, 6288],
      [622126, 622925],
    ],
  },
  {
    name: 'visa',
    format: [4, 4, 4, 4],
    length: 16,
    startNumbers: [4],
  },
  {
    name: 'master',
    format: [4, 4, 4, 4],
    length: 16,
    startNumbers: [[51, 55]],
  },
];
