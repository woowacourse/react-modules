import { UseCardValidationProps, ValidationParam, ValidationResult } from './types';

export default function useCardValidation<V>({
  blurEventValidators,
  changeEventValidators,
  totalValidators,
  setValue,
  setErrorMessage,
}: UseCardValidationProps<V>) {
  const handleValidation = ({ value, validators }: ValidationParam<V>) => {
    const firstFailedTest = validators.find(({ test }) => !test(value));

    const result: ValidationResult = firstFailedTest
      ? { isValid: false, errorMessage: firstFailedTest.errorMessage }
      : { isValid: true, errorMessage: null };

    if (result.isValid) setValue(value);

    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  const handleValidationChange = (value: V) => {
    if (!changeEventValidators) return;

    handleValidation({ value, validators: changeEventValidators });
  };

  const handleValidationBlur = (value: V) => {
    if (!blurEventValidators) return;

    handleValidation({ value, validators: blurEventValidators });
  };

  const handleUpdateValue = (value: V) => {
    if (!totalValidators) return;

    handleValidation({ value, validators: totalValidators });
  };

  return { handleValidationChange, handleValidationBlur, handleUpdateValue };
}
