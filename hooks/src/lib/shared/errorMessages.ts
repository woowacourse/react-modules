export const ERROR_MESSAGE = {
  cardNumber: {
    isNotFulfilled: "카드번호는 4자리를 입력해야 합니다.",
    isNotNumeric: "카드번호는 숫자만 입력 가능합니다.",
  },
  cvcNumber: {
    isNotFulfilled: "CVC번호는 3자리를 입력해야 합니다.",
    isNotNumeric: "CVC번호는 숫자만 입력 가능합니다.",
  },
  expiryDate: {
    isExpiredDate: "사용 기간이 만료된 카드입니다.",
    month: {
      isNotNumeric: "월은 숫자만 입력 가능합니다.",
      isInvalidMonth: "월은 1~12월 사이의 값만 입력 가능합니다.",
    },
    year: {
      isNotFulfilled: "연도는 2자리를 입력해야 합니다.",
      isNotNumeric: "연도는 숫자만 입력 가능합니다.",
    },
  },
  ownerName: {
    isNotFulfilled: "사용자 이름은 반드시 입력해야 합니다.",
    isNotAlphabetic: "사용자 이름은 영문만 입력 가능합니다.",
  },
  passwordPrefix: {
    isNotFulfilled: "비밀번호는 앞 2자리를 입력해야 합니다.",
    isNotNumeric: "비밀번호는 숫자만 입력 가능합니다.",
  },
};
