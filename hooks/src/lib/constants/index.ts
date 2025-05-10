export const ERROR_MESSAGE = {
  INVALID_LENGTH: (maxLength: number) =>
    `${maxLength} 자리의 공백 없는 숫자만 입력 가능합니다.`,
  NOT_NUMERIC: "입력은 숫자만 입력 가능합니다.",
  INVALID_MONTH: "1부터 12까지의 월수를 입력해주세요.",
  INVALID_CARD_NETWORK: "지원되지 않는 카드 네트워크입니다.",
  INVALID_GROUP_INDEX: "카드 번호 그룹 인덱스가 유효하지 않습니다.",
} as const;

export const CARD_NUMBER_LENGTH = 4;

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
