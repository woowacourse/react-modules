import { CardBrand } from "../types/card-custom-hook";

export const INPUT_RULES = {
  minMonth: 1,
  maxMonth: 12,
  maxExpirationDateLength: 2,
  maxCardNumberInputLength: 4,
  minCardHolderNameLength: 1,
  maxCardHolderNameLength: 15,
  validCVCNumberLength: 3,
  validCardPasswordNumberLength: 2,
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: "숫자를 입력해 주세요.",
  onlyEnglishAllowed: "영어를 입력해 주세요.",
  invalidCardNumberLength: "4자리의 숫자를 입력해 주세요.",
  invalidDate: "유효하지 않은 MM/YY 형식입니다.",
  invalidMonthLength: "월 입력은 01 ~ 12 사이의 입력이어야해요.",
  expiredYear: "이미 지난 년도는 입력할 수 없어요.",
  expiredDate: "이미 지난 유효기간이에요.",
  invalidHolderName: "사용자 이름은 0 ~ 15자 사이의 영문이어야해요.",
  invalidCVCNumber: "3자리의 숫자를 입력해 주세요.",
  invalidCardPassword: "2자리 숫자를 입력해주세요.",
};

export const CARD_BRAND = {
  visa: "visa",
  master: "master",
  diners: "diners",
  amex: "amex",
  unionPay: "unionPay",
  none: "none",
} as const;

interface CardInputRule {
  formattingRule: number[];
  maxLength: number;
  errorText: string;
}

export const CARD_INPUT_RULES: Record<CardBrand, CardInputRule> = {
  visa: {
    formattingRule: [4, 4, 4, 4],
    maxLength: 16,
    errorText: "4-4-4-4 형식의 16자리 숫자를 입력해 주세요",
  },
  master: {
    formattingRule: [4, 4, 4, 4],
    maxLength: 16,
    errorText: "4-4-4-4 형식의 16자리 숫자를 입력해 주세요",
  },
  diners: {
    formattingRule: [4, 6, 4],
    maxLength: 14,
    errorText: "4-6-4 형식의 14자리 숫자를 입력해 주세요",
  },
  amex: {
    formattingRule: [4, 6, 5],
    maxLength: 15,
    errorText: "4-6-5 형식의 15자리 숫자를 입력해 주세요",
  },
  unionPay: {
    formattingRule: [4, 4, 4, 4],
    maxLength: 16,
    errorText: "4-4-4-4 형식의 16자리 숫자를 입력해 주세요",
  },
  none: {
    formattingRule: [4, 4, 4, 4],
    maxLength: 16,
    errorText: "4-4-4-4 형식의 16자리 숫자를 입력해 주세요",
  },
};
