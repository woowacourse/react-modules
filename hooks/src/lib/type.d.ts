export interface Validator<CheckType, ErrorMessageType> {
  checkIsValid: (value: CheckType) => boolean;
  message: ErrorMessageType;
}
export type ValueOf<T> = T[keyof T];
