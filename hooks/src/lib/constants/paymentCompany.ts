export const PAYMENT_COMPANY = {
  NONE: {
    name: "NONE",
    formatStyle: [4, 4, 4, 4],
    length: 16,
    whiteSpaceCount: 3,
  },

  VISA: {
    name: "VISA",
    startNumber: ["4"],
    formatStyle: [4, 4, 4, 4],
    length: 16,
    whiteSpaceCount: 3,
  },

  MASTER: {
    name: "MASTER",
    startNumber: ["51", "52", "53", "54", "55"],
    formatStyle: [4, 4, 4, 4],
    length: 16,
    whiteSpaceCount: 3,
  },

  DINERS: {
    name: "DINERS",
    startNumber: ["36"],
    formatStyle: [4, 6, 4],
    length: 14,
    whiteSpaceCount: 2,
  },

  AMEX: {
    name: "AMEX",
    startNumber: ["34", "37"],
    formatStyle: [4, 6, 5],
    length: 15,
    whiteSpaceCount: 2,
  },

  UNION: {
    name: "UNION",
    startNumber: ["62"],
    ranges: [
      { start: 622126, end: 622925 },
      { start: 624, end: 626 },
      { start: 6282, end: 6288 },
    ],
    formatStyle: [4, 4, 4, 4],
    length: 16,
    whiteSpaceCount: 3,
  },
} as const;
