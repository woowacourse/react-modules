import { getRangeStringList } from '../utils';

const CARD_BRAND_INFO = {
  Visa: {
    PREFIX: ['4'],
    LENGTH: 16,
  },
  MasterCard: {
    PREFIX: getRangeStringList(51, 55),
    LENGTH: 16,
  },
  Diners: {
    PREFIX: ['36'],
    LENGTH: 14,
  },
  AMEX: {
    PREFIX: ['34', '37'],
    LENGTH: 15,
  },
  유니온페이: {
    PREFIX: [
      ...getRangeStringList(622126, 622925),
      ...getRangeStringList(624, 626),
      ...getRangeStringList(6282, 6288),
    ],
    LENGTH: 16,
  },
} as const;

export default CARD_BRAND_INFO;
