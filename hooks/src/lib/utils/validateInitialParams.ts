import Validation from './Validation';

export function validateAllowedLength({
  allowedLength,
  minLength,
  maxLength,
  errorMessage,
}: {
  allowedLength: number;
  minLength: number;
  maxLength: number;
  errorMessage: string;
}) {
  if (
    !Validation.isNumberInRange({
      min: minLength,
      max: maxLength,
      value: allowedLength,
    })
  ) {
    throw new Error(errorMessage);
  }
}
