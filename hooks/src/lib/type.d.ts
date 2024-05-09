export interface Validator<CheckType, ErrorMessageType> {
  checkIsValid: (value: CheckType) => boolean;
  message: ErrorMessageType;
}
export type ValueOf<T> = T[keyof T];

export interface Range<CompareType = string> {
  from: CompareType;
  to: CompareType;
}

export interface CardBrand<CardNameType = string> {
  name: CardNameType;
  numberLength: number;
  startWiths: (string | Range)[];
  formatArray: number[];
}
