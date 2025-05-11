export type CvcErrorCodes =
  | "INVALID_NUMBER"
  | "INVALID_FORMAT"
  | "INVALID_LENGTH";
export type CardNumberErrorCodes =
  | "INVALID_NUMBER"
  | "INVALID_FORMAT"
  | "INVALID_CHECKSUM";
export type PasswordErrorCodes =
  | "INVALID_CHARACTER"
  | "INVALID_FORMAT"
  | "INVALID_LENGTH";
export type ExpiryDateErrorCodes =
  | "INVALID_FORMAT"
  | "INVALID_MONTH"
  | "EXPIRED_DATE";

export const CVC_ERROR_MESSAGES: Record<CvcErrorCodes, string> = {
  INVALID_NUMBER: "CVC는 숫자만 입력해주세요.",
  INVALID_FORMAT: "CVC는 올바른 형식으로 입력해주세요.",
  INVALID_LENGTH: "CVC는 3자리 숫자로 입력해주세요.",
} as const;

export const CARD_NUMBER_ERROR_MESSAGES: Record<CardNumberErrorCodes, string> =
  {
    INVALID_NUMBER: "카드 번호는 숫자만 입력해주세요.",
    INVALID_FORMAT: "카드 번호를 올바른 형식으로 입력해주세요.",
    INVALID_CHECKSUM: "유효한 카드 번호를 입력해주세요.",
  } as const;

export const PASSWORD_ERROR_MESSAGES: Record<PasswordErrorCodes, string> = {
  INVALID_CHARACTER: "비밀번호에 허용되지 않은 문자가 포함되어 있습니다.",
  INVALID_FORMAT: "비밀번호 형식이 올바르지 않습니다.",
  INVALID_LENGTH: "비밀번호는 2자 이상 입력해주세요.",
} as const;

export const EXPIRY_DATE_ERROR_MESSAGES: Record<ExpiryDateErrorCodes, string> =
  {
    INVALID_FORMAT: "만료일을 MM/YY 형식으로 입력해주세요.",
    INVALID_MONTH: "유효한 월을 입력해주세요 (01~12).",
    EXPIRED_DATE: "만료된 카드입니다.",
  } as const;
