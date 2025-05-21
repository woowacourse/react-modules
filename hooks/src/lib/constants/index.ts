export const ERROR_TYPE = {
  INVALID_LENGTH: "INVALID_LENGTH",
  NOT_NUMERIC: "NOT_NUMERIC",
  INVALID_MONTH: "INVALID_MONTH",
  INVALID_CARD_NETWORK: "INVALID_CARD_NETWORK",
  INVALID_GROUP_INDEX: "INVALID_GROUP_INDEX",
} as const;

export type ErrorType = keyof typeof ERROR_TYPE;

type Language = "ko" | "en";

export const ERROR_MESSAGE: Record<
  Language,
  Record<ErrorType, string | ((...args: any[]) => string)>
> = {
  ko: {
    INVALID_LENGTH: (max: number) =>
      `${max} 자리의 공백 없는 숫자만 입력 가능합니다.`,
    NOT_NUMERIC: "입력은 숫자만 입력 가능합니다.",
    INVALID_MONTH: "1부터 12까지의 월수를 입력해주세요.",
    INVALID_CARD_NETWORK: "지원되지 않는 카드 네트워크입니다.",
    INVALID_GROUP_INDEX: "카드 번호 그룹 인덱스가 유효하지 않습니다.",
  },
  en: {
    INVALID_LENGTH: (max: number) =>
      `Only numbers without spaces up to ${max} digits are allowed.`,
    NOT_NUMERIC: "Only numeric input is allowed.",
    INVALID_MONTH: "Please enter the number of months from 1 to 12.",
    INVALID_CARD_NETWORK: "The card network is not supported.",
    INVALID_GROUP_INDEX: "Card number group index is invalid.",
  },
};

export const CVC_LENGTH = 3;

export const PASSWORD_LENGTH = 2;

export const EXPIRY_DATE_LENGTH = 2;

export type CardNetwork =
  | "VISA"
  | "MASTER"
  | "DINERS"
  | "AMEX"
  | "UNIONPAY"
  | "PENDING"
  | "DEFAULT";

export const CARD_INPUT_LENGTH: Record<CardNetwork, number[]> = {
  VISA: [4, 4, 4, 4],
  MASTER: [4, 4, 4, 4],
  DINERS: [4, 6, 4],
  AMEX: [4, 6, 5],
  UNIONPAY: [4, 4, 4, 4],
  PENDING: [4, 4, 4, 4],
  DEFAULT: [4, 4, 4, 4],
};
