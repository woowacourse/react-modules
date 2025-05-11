import { CardPrefixRuleType, CardType, ErrorMessageType } from "../types";

export const NUMBER_REGEX = /^[0-9]*$/;
export const ERROR_MESSAGE: Record<string, ErrorMessageType> = {
  NUMBER_ONLY: "숫자만 입력 가능합니다.",
  MONTH_VALID: "유효하지 않은 월입니다.",
  YEAR_VALID: "유효하지 않은 연도입니다.",
};
export const MIN_MONTH = 1;
export const MAX_MONTH = 12;
export const CURRENT_YEAR = new Date().getFullYear() % 100;

export const MAX_LENGTH = {
  CARD_NUMBER: 16,
  EXPIRATION_DATE: 4,
  CVC_NUMBER: 3,
  PASSWORD: 2,
};

export const CARD_PREFIX_RULE: CardPrefixRuleType[] = [
  // AMEX: 34, 37
  { type: "amex", length: 2, start: 34, end: 34 },
  { type: "amex", length: 2, start: 37, end: 37 },

  // Diners: 36
  { type: "diners", length: 2, start: 36, end: 36 },

  // UnionPay
  { type: "unionpay", length: 6, start: 622126, end: 622925 },
  { type: "unionpay", length: 3, start: 624, end: 626 },
  { type: "unionpay", length: 4, start: 6282, end: 6288 },

  // Visa: 4
  { type: "visa", length: 1, start: 4, end: 4 },

  // MasterCard: 51–55
  { type: "master", length: 2, start: 51, end: 55 },
];

const DEFAULT_CARD_PARSING_RULE = [4, 4, 4, 4];
const UNIQUE_CARD_PARSING_RULE: Record<string, number[]> = {
  diners: [4, 6, 4],
  amex: [4, 6, 5],
};

export const cardParsingRule = (type: CardType) => {
  return UNIQUE_CARD_PARSING_RULE[type] ?? DEFAULT_CARD_PARSING_RULE;
};

export const DATE_PARSING_RULE = [2, 2];
