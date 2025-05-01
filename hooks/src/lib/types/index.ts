export type SingleErrorType = boolean;
export type ListErrorType = boolean[];

export type ErrorMessageType =
  | ''
  | '숫자만 입력 가능합니다.'
  | '유효하지 않은 월입니다.'
  | '유효하지 않은 연도입니다.';

export interface ValidateFuncReturnType {
  error: boolean;
  message: ErrorMessageType;
}

type ValidWithoutIndex = (value: string) => void;
type ValidWithIndex = (value: string, index: number) => void;

export type ValidInputFuncType = ValidWithoutIndex | ValidWithIndex;

export interface ValidationHookReturnType {
  errors: SingleErrorType | ListErrorType;
  errorMessage: ErrorMessageType;
  validateInput:  ValidInputFuncType;
  noError: boolean;
}
