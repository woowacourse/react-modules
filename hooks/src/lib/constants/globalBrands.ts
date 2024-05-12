export const GLOBAL_BRANDS = {
  Diners: {
    name: 'Diners',
    allowedLength: 14,
    format: [4, 6, 4],
  },
  AMEX: {
    name: 'AMEX',
    allowedLength: 15,
    format: [4, 6, 5],
  },
  UnionPay: {
    name: 'UnionPay',
    allowedLength: 16,
    format: [4, 4, 4, 4],
  },
  Visa: {
    name: 'Visa',
    allowedLength: 16,
    format: [4, 4, 4, 4],
  },
  MasterCard: {
    name: 'MasterCard',
    allowedLength: 16,
    format: [4, 4, 4, 4],
  },
};

export default GLOBAL_BRANDS;
