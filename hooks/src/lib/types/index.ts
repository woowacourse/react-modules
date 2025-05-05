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

export type CurriedInputChangeHandler = (
  index: number
) => (e: React.ChangeEvent<HTMLInputElement>) => void;

export interface ValidationHookReturnType {
  inputStates: string | string[];
  errorMessage: ErrorMessageType;
  onChange: CurriedInputChangeHandler;
  noError: boolean;
}
