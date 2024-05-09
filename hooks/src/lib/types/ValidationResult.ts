export enum ERROR_TYPE {
  numericOnly,
  invalidLength,
}

export enum ERROR_MESSAGE {
  numericOnly = "숫자만 입력이 가능해요!",
  invalidLength = "유효하지 않는 길이입니다!",
}

export class ValidationError extends Error {
  errorType: ERROR_TYPE;
  errorMessage: ERROR_MESSAGE;

  constructor(errorType: ERROR_TYPE, errorMessage: ERROR_MESSAGE) {
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
