export enum ERROR_TYPE {
  numericOnly,
  maxLength,
  invalidLength,
  englishOnly,
  monthCondition,
  yearCondition,
  expired,
  invalidCardBrand,
}

export const ERROR_MESSAGE = {
  [ERROR_TYPE.numericOnly]: "숫자만 입력할 수 있어요!",
  [ERROR_TYPE.maxLength]: (maxLength: number) =>
    `${maxLength}자리까지만 입력할 수 있어요!`,
  [ERROR_TYPE.invalidLength]: (validLength: number) =>
    `${validLength}자리 숫자를 입력해주세요!`,
};

export class ValidationError extends Error {
  errorType: ERROR_TYPE;
  errorMessage: string;

  constructor(errorType: ERROR_TYPE, errorMessage: string) {
    super(errorMessage);
    this.name = "ValidationError";
    this.errorType = errorType;
    this.errorMessage = errorMessage;
  }
}

type ValidationResult =
  | { isValid: true }
  | { isValid: false; errorType: ERROR_TYPE; errorMessage: string };

export default ValidationResult;
