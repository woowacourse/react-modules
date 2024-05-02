import { UseCardValidationWidthKeyProps, ValidationWidthKeyParam, ValidationResult } from './types';

export default function useCardValidationWithKey<V, K>({
  blurEventValidators,
  changeEventValidators,
  totalValidators,
  applyNewValue,
  applyNewError,
  setErrorMessage,
}: UseCardValidationWidthKeyProps<V, K>) {
  const handleValidation = ({ value, validators, key }: ValidationWidthKeyParam<V, K>) => {
    const firstFailedTest = validators.find(({ test }) => !test(value, key));

    const result: ValidationResult = firstFailedTest
      ? { isValid: false, errorMessage: firstFailedTest.errorMessage }
      : { isValid: true, errorMessage: null };

    if (result.isValid) {
      applyNewValue(value, key);
    }

    applyNewError(result.isValid, key);
    setErrorMessage(result.isValid ? null : result.errorMessage);
  };

  const handleValidationChange = (value: V, key: K) => {
    if (!changeEventValidators) return;

    handleValidation({ value, validators: changeEventValidators, key });
  };

  const handleValidationBlur = (value: V, key: K) => {
    if (!blurEventValidators) return;

    handleValidation({ value, validators: blurEventValidators, key });
  };

  const handleUpdateValue = (value: V, key: K) => {
    if (!totalValidators) return;

    handleValidation({ value, validators: totalValidators, key });
  };

  return { handleValidationChange, handleValidationBlur, handleUpdateValue };
}
