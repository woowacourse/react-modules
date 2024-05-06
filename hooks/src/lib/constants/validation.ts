export const COMMON_ERROR = {
  notNumeric: "숫자만 입력해주세요.",
  empty: "값을 입력해주세요.",
};

export const CARD_NUMBER = {
  errorMessage: {
    invalidLength: (length: number) => {
      return `카드 번호는 총 ${length}자리입니다.`;
    },
  },
} as const;

export const EXPIRATION_DATE = {
  inputLength: 2,

  errorMessage: {
    expired: "이미 만료된 카드입니다.",
    invalidMonth: "달은 01에서 12 사이의 2자리 숫자입니다.",
    invalidYear: "연도는 올해부터의 2자리 숫자입니다.",
  },
} as const;

export const USERNAME = {
  errorMessage: {
    invalidLength: (length: number) => {
      return `이름은 ${length}자 이하의 영문 대문자여야 합니다.`;
    },
  },
} as const;

export const CARD_COMPANY = {
  errorMessage: {
    notSelected: "카드사를 선택해 주세요.",
  },
} as const;

export const CVC_NUMBER = {
  inputLength: 3,

  errorMessage: {
    notThreeDigits: "CVC 번호는 3자리 숫자입니다.",
  },
} as const;

export const PASSWORD = {
  errorMessage: {
    invalidLength: (length: number) => {
      return `비밀번호는 ${length}자리 숫자입니다.`;
    },
  },
} as const;
