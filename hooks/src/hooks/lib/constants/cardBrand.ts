const CARD_BRAND = {
  VISA: {
    name: "VISA",
    patterns: /^4/,
    format: [4, 4, 4, 4],
    matchedLength: 16,
    maxLength: 19,
  },
  MASTER_CARD: {
    name: "MASTER_CARD",
    patterns: /^5[1-5]/,
    format: [4, 4, 4, 4],
    matchedLength: 16,
    maxLength: 19,
  },
  DINERS: {
    name: "DINERS",
    patterns: /^36/,
    format: [4, 6, 4],
    matchedLength: 14,
    maxLength: 16,
  },
  AMEX: {
    name: "AMEX",
    patterns: /^3(4|7)/,
    format: [4, 6, 5],
    matchedLength: 15,
    maxLength: 17,
  },
  UNION_PAY: {
    name: "UNION_PAY",
    patterns: /^62(212[6-9]|21[3-9][0-9]|2[2-8][0-9][0-9]|29[0-1][0-9]|292[0-5]|[4-6]|8[2-8])/,
    format: [4, 4, 4, 4],
    matchedLength: 16,
    maxLength: 19,
  },
  UNKNOWN: {
    name: "",
    patterns: /^/,
    format: [4, 4, 4, 4],
    matchedLength: 16,
    maxLength: 19,
  },
};

export default CARD_BRAND;
