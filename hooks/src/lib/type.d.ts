export interface Validator<CheckType, ErrorMessageType> {
  checkIsValid: (value: CheckType) => boolean;
  message: ErrorMessageType;
}
