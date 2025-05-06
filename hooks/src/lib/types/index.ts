export type SingleErrorType = boolean;
export type ListErrorType = boolean[];

export type ErrorMessageType =
  | ''
  | '숫자만 입력 가능합니다.'
  | '유효하지 않은 월입니다.'
  | '유효하지 않은 연도입니다.'
  | '올바른 길이의 숫자를 입력해주세요.';

export interface ValidateFuncReturnType {
  error: boolean;
  message: ErrorMessageType;
}

export type CurriedInputChangeHandler = (
  index: number
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface ValidationHookReturnType {
  inputStates: string | string[];
  errorMessage: ErrorMessageType;
  onChange: CurriedInputChangeHandler;
  noError: boolean;
}

export type ExpirationDateChangeHandler = (
  type: keyof ExpirationDateInputs
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface ExpirationDateInputs {
  month: string;
  year: string;
}

export interface ExpirationDateErrors {
  month: SingleErrorType;
  year: SingleErrorType;
}

export interface ExpirationDateValidationReturnType {
  inputStates: ExpirationDateInputs;
  errorMessage: ErrorMessageType;
  onChange: ExpirationDateChangeHandler;
  noError: boolean;
}
