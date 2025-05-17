import { CardCompany } from '../types/cardCompany';
import { extractDigits } from '../utils/extractDigits';

export type CardCompanyRule = {
  pattern: RegExp;
  validLength: number;
  formatBlocks: number[];
};

export const CARD_RULES: Record<CardCompany, CardCompanyRule> = {
  Visa: {
    pattern: /^4/,
    validLength: 16,
    formatBlocks: [4, 4, 4, 4]
  },
  MasterCard: {
    pattern: /^5[1-5]/,
    validLength: 16,
    formatBlocks: [4, 4, 4, 4]
  },
  AMEX: {
    pattern: /^3[47]/,
    validLength: 15,
    formatBlocks: [4, 6, 5]
  },
  Diners: {
    pattern: /^36/,
    validLength: 14,
    formatBlocks: [4, 6, 4]
  },
  UnionPay: {
    pattern: /^(622(12[6-9]|1[3-9]\d|[2-8]\d{2}|9[0-2][0-5])|62[4-6]|628[2-8])/,
    validLength: 16,
    formatBlocks: [4, 4, 4, 4]
  },
  Unknown: {
    pattern: /.^/,
    validLength: 16,
    formatBlocks: [4, 4, 4, 4]
  }
};

export const detectCardCompany = (number: string, rules: Record<CardCompany, CardCompanyRule>): CardCompany => {
  const digitsOnly = extractDigits(number);
  return (
    (Object.entries(rules) as [CardCompany, CardCompanyRule][]).find(
      ([_, rule]) => rule.pattern.test(digitsOnly) && digitsOnly.length <= rule.validLength
    )?.[0] ?? 'Unknown'
  );
};

export const formatCardNumber = (input: string, blocks: number[]) => {
  const digitsOnly = extractDigits(input);
  return blocks
    .map((blockSize, i, arr) => {
      const start = arr.slice(0, i).reduce((acc, len) => acc + len, 0);
      return digitsOnly.slice(start, start + blockSize);
    })
    .filter(Boolean)
    .join('-');
};
