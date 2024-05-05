export const INPUT_RULES = {
  minMonth: 1,
  maxMonth: 12,
  minCardHolderNameLength: 1,
  maxCardHolderNameLength: 15,
  validCardNumberLength: 4,
  validExpiryDateLength: 2,
  validCVCLength: 3,
  validCardPasswordLength: 2,
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: "숫자를 입력해 주세요.",
  onlyEnglishAllowed: "영문자를 입력해 주세요.",
  invalidCardNumberLength: "4자리의 숫자를 입력해 주세요.",
  invalidMonthRange: "월 입력은 01 ~ 12 사이의 입력이어야해요",
  expiredYear: "이미 지난 년도는 입력할 수 없어요.",
  expiredDate: "이미 지난 유효기간이에요",
  invalidCardHolderName: "사용자 이름은 0 ~ 15자 사이의 영문이어야 합니다.",
  invalidCVC: "3자리의 숫자를 입력해 주세요",
  invalidCardPassword: "비밀번호 앞 2자리 숫자를 입력해주세요.",
};
