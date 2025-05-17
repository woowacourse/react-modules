export const cardTypeRules = {
  Visa: {
    length: 16,
    format: [4, 4, 4, 4],
  },
  Master: {
    length: 16,
    format: [4, 4, 4, 4],
  },
  Amex: {
    length: 15,
    format: [4, 6, 5],
  },
  Diners: {
    length: 14,
    format: [4, 6, 4],
  },
  UnionPay: {
    length: 16,
    format: [4, 4, 4, 4],
  },
};
