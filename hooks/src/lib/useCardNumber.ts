interface ValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface UseCardNumberProps {
  validationErrors: ValidationErrors;
}
export default function useCardNumber({ validationErrors }: UseCardNumberProps) {
  const validateNumber = (value: string) => {
    return Number.isInteger(Number(value));
  };

  const validateFilledValue = (value: string) => {
    return !!value;
  };

  const validateLength = (value: string) => {
    return value.length === 4;
  };

  const changeEventValidators = [{ test: validateNumber, errorMessage: validationErrors.number }];
  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: validationErrors.empty },
    { test: validateLength, errorMessage: validationErrors.length },
  ];

  return { changeEventValidators, blurEventValidators };
}
