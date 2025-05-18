export const CARD_NETWORK_PATTERNS = {
  VISA: {
    PATTERN: /^4/,
    FORMAT_PATTERN: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
    FORMAT_TEMPLATE: "$1-$2-$3-$4",
    LENGTH: 16,
  },
  MASTER_CARD: {
    PATTERN: /^5[1-5]/,
    FORMAT_PATTERN: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
    FORMAT_TEMPLATE: "$1-$2-$3-$4",
    LENGTH: 16,
  },
  AMEX: {
    PATTERN: /^3[47]/,
    FORMAT_PATTERN: /^(\d{4})(\d{6})(\d{5})$/,
    FORMAT_TEMPLATE: "$1-$2-$3",
    LENGTH: 15,
  },
  DINERS: {
    PATTERN: /^3(?:0[0-5]|[68])/,
    FORMAT_PATTERN: /^(\d{4})(\d{6})(\d{4})$/,
    FORMAT_TEMPLATE: "$1-$2-$3",
    LENGTH: 14,
  },
  UNION_PAY: {
    PATTERN:
      /^(622(?:12[6-9]|1[3-9]\d|[2-8]\d{2}|9[0-1]\d|92[0-5])|62[4-6]|628[2-8])/,
    FORMAT_PATTERN: /^(\d{4})(\d{4})(\d{4})(\d{4})$/,
    FORMAT_TEMPLATE: "$1-$2-$3-$4",
    LENGTH: 16,
  },
} as const;

type CardNetworkPattern = {
  PATTERN: RegExp;
  FORMAT_PATTERN: RegExp;
  FORMAT_TEMPLATE: string;
  LENGTH: number;
};

export type CardNetworkName = keyof typeof CARD_NETWORK_PATTERNS;

export type TypeOfCardNetworkPatterns = Record<string, CardNetworkPattern>;
