export const CARD_BRANDS_INFO: {
  [key: string]: {
    maxLength: number;
    formatting: number[];
  };
} = {
  visa: {
    maxLength: 16,
    formatting: [4, 4, 4, 4],
  },
  master: {
    maxLength: 16,
    formatting: [4, 4, 4, 4],
  },
  diners: {
    maxLength: 14,
    formatting: [4, 6, 4],
  },
  amex: {
    maxLength: 15,
    formatting: [4, 6, 5],
  },
  unionPay: {
    maxLength: 16,
    formatting: [4, 4, 4, 4],
  },
  unknown: {
    maxLength: 16,
    formatting: [4, 4, 4, 4],
  },
};
