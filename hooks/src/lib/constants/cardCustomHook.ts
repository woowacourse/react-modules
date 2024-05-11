import cardInputValidator from "../validators/cardInputValidator";

export const INPUT_RULES = {
  minMonth: 1,
  maxMonth: 12,
  minCardHolderNameLength: 1,
  maxCardHolderNameLength: 15,
  validDinersCardNumber: "36",
  validAMEXCardNumbers: ["34", "37"],
  validCardNumberLength: (value: string) => {
    if (cardInputValidator.validateDinersCardNumber(value)) return 14;

    if (cardInputValidator.validateAMEXCardNumber(value)) return 15;

    return 16;
  },
  validExpiryDateLength: 2,
  validCVCLength: 3,
  validCardPasswordLength: 2,
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: "숫자를 입력해 주세요.",
  onlyEnglishAllowed: "영문자를 입력해 주세요.",
  invalidCardNumberLength: (value: string) => {
    if (cardInputValidator.validateDinersCardNumber(value))
      return "Diners 카드번호는 14자리 숫자여야 합니다.";

    if (cardInputValidator.validateAMEXCardNumber(value))
      return "AMEX 카드번호는 15자리 숫자여야 합니다.";

    return "카드번호는 16자리 숫자여야 합니다.";
  },
  invalidMonthRange: "월 입력은 01 ~ 12 사이의 입력이어야해요",
  expiredYear: "이미 지난 년도는 입력할 수 없어요.",
  expiredDate: "이미 지난 유효기간이에요",
  invalidCardHolderName: "사용자 이름은 0 ~ 15자 사이의 영문이어야 합니다.",
  invalidCVC: "3자리의 숫자를 입력해 주세요",
  invalidCardPassword: "비밀번호 앞 2자리 숫자를 입력해주세요.",
};
