export const INPUT_RULES = {
  minMonth: 1,
  maxMonth: 12,
  maxCardNumberPartLength: 4,
  maxExpirationDateLength: 2,
  minCardOwnerNameLength: 1,
  maxCardOwnerNameLength: 15,
  validExpirationLength: 2,
  validCVCNumberLength: 3,
  validCardPasswordNumberLength: 2,
};

export const VALIDATION_MESSAGES = {
  onlyNumbersAllowed: "숫자를 입력해 주세요.",
  onlyEnglishAllowed: "영어를 입력해 주세요.",
  invalidCardNumberLength: "4자리의 숫자를 입력해 주세요.",
  invalidDate: "유효하지 않은 MM/YY 형식입니다.",
  invalidMonthLength: "월 입력은 01 ~ 12 사이의 입력이어야해요.",
  expiredYear: "이미 지난 년도는 입력할 수 없어요.",
  expiredDate: "이미 지난 유효기간이에요.",
  invalidHolderName: "사용자 이름은 0 ~ 15자 사이의 영문이어야해요.",
  invalidCVCNumber: "3자리의 숫자를 입력해 주세요.",
  invalidCardPassword: "2자리 숫자를 입력해주세요.",
};
