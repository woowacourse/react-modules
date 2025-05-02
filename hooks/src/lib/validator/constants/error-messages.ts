export type FieldErrorCode = {
  cvc: "INVALID_LENGTH" | "INVALID_NUMBER";
  password: "INVALID_LENGTH" | "INVALID_FORMAT" | "INVALID_CHARACTER";
  cardNumber: "INVALID_LENGTH" | "INVALID_FORMAT" | "INVALID_NUMBER";
  expiryDate:
    | "INVALID_FORMAT"
    | "INVALID_MONTH"
    | "INVALID_YEAR"
    | "EXPIRED_DATE";
};

// CVC error messages
export const CVC_ERROR_MESSAGES = {
  INVALID_NUMBER: "CVC는 숫자만 입력 가능합니다",
  INVALID_LENGTH: "CVC는 3자리여야 합니다",
} as const;

// Card number error messages
export const CARD_NUMBER_ERROR_MESSAGES = {
  INVALID_NUMBER: "카드 번호는 숫자만 입력 가능합니다",
  INVALID_LENGTH: "카드 번호는 16자리여야 합니다",
  INVALID_FORMAT: "카드 번호 형식이 올바르지 않습니다",
  INVALID_CHECKSUM: "실제 존재하지 않는 카드 번호입니다",
} as const;

// Password error messages
export const PASSWORD_ERROR_MESSAGES = {
  INVALID_CHARACTER: "비밀번호에 허용되지 않은 문자가 포함되어 있습니다",
  INVALID_FORMAT: "비밀번호 형식이 올바르지 않습니다",
  INVALID_LENGTH: "비밀번호는 앞 2자리만 입력 가능합니다",
} as const;

// Expiry date error messages
export const EXPIRY_DATE_ERROR_MESSAGES = {
  INVALID_FORMAT: "만료일은 MM/YY 형식이어야 합니다",
  INVALID_MONTH: "유효하지 않은 월(MM)입니다. 1~12 사이의 값을 입력해주세요",
  INVALID_YEAR: "유효하지 않은 연도(YY)입니다",
  EXPIRED_DATE: "카드가 만료되었습니다",
} as const;
