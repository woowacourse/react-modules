import { PAYMENT_COMPANY } from "./paymentCompany";

export const COMMON_ERROR = {
  notNumeric: "숫자만 입력해주세요.",
  empty: "값을 입력해주세요.",
};

export const CARD_NUMBER = {
  errorMessage: {
    invalidLength: (companyName: string, length: number) => {
      const errorMessage =
        companyName === PAYMENT_COMPANY.NONE.name
          ? `카드 번호는 총 ${PAYMENT_COMPANY.NONE.length}자리입니다.`
          : `${companyName}사의 카드 번호는 총 ${length}자리입니다.`;

      return errorMessage;
    },
  },
} as const;

export const DATE = {
  startMonth: 1,
  endMonth: 12,
  digit: 2,
} as const;

export const EXPIRATION_DATE = {
  monthRegexp: () => {
    return `^(0[1-9]|1[0-2])$`;
  },

  yearRegexp: () => {
    return /^(0\d|[1-9]\d|\d{2})$/;
  },

  errorMessage: {
    expired: "이미 만료된 카드입니다.",
    invalidMonth: `달은 0${DATE.startMonth}에서 ${DATE.endMonth} 사이의 ${DATE.digit}자리 숫자입니다.`,
    invalidYear: `연도는 올해부터의 ${DATE.digit}자리 숫자입니다.`,
  },
} as const;

export const USERNAME = {
  regexp: (length: number) => {
    return `^[A-Z\\s]{0,${length}}$`;
  },

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
  errorMessage: {
    inValidLength: (length: number) => {
      return `CVC 번호는 ${length}자리 숫자입니다.`;
    },
  },
} as const;

export const PASSWORD = {
  errorMessage: {
    invalidLength: (length: number) => {
      return `비밀번호는 ${length}자리 숫자입니다.`;
    },
  },
} as const;
