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

export function validateAllowedYearLength({
  allowedYearLength,
  allowedRange,
  errorMessage,
}: {
  allowedYearLength: number;
  allowedRange: number[];
  errorMessage: string;
}) {
  if (!allowedRange.includes(allowedYearLength)) {
    throw new Error(errorMessage);
  }
}

export function validateTotalCardNumbersLength({
  format,
  totalLength,
  errorMessage,
}: {
  format: number[];
  totalLength: number;
  errorMessage: string;
}) {
  if (format.reduce((totalLength, length) => totalLength + length, 0) > totalLength) {
    throw new Error(errorMessage);
  }
}
