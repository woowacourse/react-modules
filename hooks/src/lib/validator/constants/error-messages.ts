export type FieldErrorCode = {
  cvc: "INVALID_LENGTH" | "INVALID_NUMBER" | "INVALID_NUMBER";
  password: "INVALID_LENGTH" | "INVALID_FORMAT" | "INVALID_CHARACTER";
  cardNumber: "INVALID_LENGTH" | "INVALID_FORMAT" | "INVALID_NUMBER";
  strictCardNumber:
    | "INVALID_LENGTH"
    | "INVALID_FORMAT"
    | "INVALID_NUMBER"
    | "INVALID_CHECKSUM";
  expiryDate: "INVALID_FORMAT" | "INVALID_MONTH" | "EXPIRED_DATE";
};

export const CVC_ERROR_MESSAGES = {
  INVALID_NUMBER: "CVC는 숫자만 입력해주세요.",
  INVALID_FORMAT: "CVC는 올바른 형식으로 입력해주세요.",
  INVALID_LENGTH: "CVC는 3자리 숫자로 입력해주세요.",
} as const;

export const CARD_NUMBER_ERROR_MESSAGES = {
  INVALID_NUMBER: "카드 번호는 숫자만 입력해주세요.",
  INVALID_FORMAT: "카드 번호를 올바른 형식으로 입력해주세요.",
  INVALID_CHECKSUM: "유효한 카드 번호를 입력해주세요.",
} as const;

export const PASSWORD_ERROR_MESSAGES = {
  INVALID_CHARACTER: "비밀번호에 허용되지 않은 문자가 포함되어 있습니다.",
  INVALID_FORMAT: "비밀번호 형식이 올바르지 않습니다.",
  INVALID_LENGTH: "비밀번호는 2자 이상 입력해주세요.",
} as const;

export const EXPIRY_DATE_ERROR_MESSAGES = {
  INVALID_FORMAT: "만료일을 MM/YY 형식으로 입력해주세요.",
  INVALID_MONTH: "유효한 월을 입력해주세요 (01~12).",
  EXPIRED_DATE: "만료된 카드입니다.",
} as const;
