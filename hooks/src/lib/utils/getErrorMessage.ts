import { Validator } from './../type.d';

export default function getErrorMessage<CheckType, ErrorMessageType>(
  value: CheckType,
  validators: Validator<CheckType, ErrorMessageType>[]
) {
  return validators.reduce((message: ErrorMessageType | null, validator) => {
    if (message !== null) return message;
    if (validator.checkIsValid(value)) return message;
    return validator.message;
  }, null);
}
