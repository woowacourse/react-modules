export type SingleErrorType = boolean;
export type ListErrorType = boolean[];

export type ErrorMessageType =
  | ""
  | "숫자만 입력 가능합니다."
  | "유효하지 않은 월입니다."
  | "유효하지 않은 연도입니다.";

export interface ValidateFuncReturnType {
  error: boolean;
  message: ErrorMessageType;
}

type ValidWithoutIndex = (value: string) => void;
type ValidWithIndex = (value: string, index: number) => void;

export type ValidInputFuncType = ValidWithoutIndex | ValidWithIndex;

export interface HookReturnType<T extends keyof CardInformationType> {
  state: CardInformationType[T];
  onChange: setCardInformationType[T];
  errors: SingleErrorType | ListErrorType;
  errorMessage: ErrorMessageType;
  validateInput: ValidInputFuncType;
  isLengthComplete: boolean;
  isErrorComplete: boolean;
}

export type CardInformationType = {
  cardNumber: CardNumberType;
  expirationDate: ExpirationDateType;
  cvcNumber: CvcNumberType;
  password: PasswordType;
};

export type setCardInformationType = {
  cardNumber: SetValueFn<CardNumberType[keyof CardNumberType]>;
  expirationDate: SetValueFn<ExpirationDateType[keyof ExpirationDateType]>;
  cvcNumber: SetValueFn<CvcNumberType>;
  password: SetValueFn<PasswordType>;
};

export type CardNumberType = Record<
  "first" | "second" | "third" | "forth",
  string
>;
export type ExpirationDateType = Record<"month" | "year", string>;
export type CvcNumberType = string;
export type PasswordType = string;

export type cardStateType =
  | CardNumberType
  | ExpirationDateType
  | CvcNumberType
  | PasswordType;

export type SetValueFn<T> = (value: T, index?: number) => void;
