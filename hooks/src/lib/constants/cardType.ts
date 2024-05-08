export const CARD_TYPE = {
  VISA: {
    REGEX: '^4',
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
  MASTER: {
    REGEX: '^5[1-5]',
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
  DINERS: {
    REGEX: '^36',
    MAX_LENGTH: 14,
    PATTERN: [4, 6, 4],
  },
  AMEX: {
    REGEX: '^3[47]',
    MAX_LENGTH: 15,
    PATTERN: [4, 6, 5],
  },
  UNION_PAY: {
    REGEX: '^(62212[6-9]|6221[3-9]|622[2-8]|6229[0-2][0-5]|624|625|626|628[2-8])',
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
  JCB: {
    REGEX: '^35(28|89)',
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
  DISCOVER: {
    REGEX: '^(6011|65|64[4-9])',
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
  UNKNOWN: {
    MAX_LENGTH: 16,
    PATTERN: [4, 4, 4, 4],
  },
};
