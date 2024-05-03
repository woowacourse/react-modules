import { Validator } from "../domains/validation";

export const makeLengthValidator = (length: number): Validator => ({
  validate: (value) => value.length === length,
  errorMessage: "필드의 길이는 4여야합니다.",
  type: "blur",
});
export const makeMaxLengthValidator = (maxLength: number): Validator => ({
  validate: (value) => value.length <= 30,
  errorMessage: `이름의 길이는 ${maxLength}이하여야합니다.`,
});
export const numericOnlyValidator: Validator = {
  validate: (value) => /^\d*$/.test(value),
  errorMessage: "숫자만 입력 가능합니다.",
};
export const upperCaseOnlyValidator: Validator = {
  validate: (value) => /^[A-Z\s]*$/.test(value),
  errorMessage: "영어 대문자와 공백만 입력 가능합니다.",
};
export const noConsecutiveSpaceValidator: Validator = {
  validate: (value) => /^(?!.*\s\s)/.test(value),
  errorMessage: "공백은 2번 이상 연속될 수 없습니다.",
};
