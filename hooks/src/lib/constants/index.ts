export const ERROR_MESSAGE = {
  INVALID_LENGTH: (maxLength: number) =>
    `${maxLength} 자리의 공백 없는 숫자만 입력 가능합니다.`,
  NOT_NUMERIC: "입력은 숫자만 입력 가능합니다.",
} as const;

export const CARD_NUMBER_LENGTH = 16;

export const CVC_LENGTH = 3;
