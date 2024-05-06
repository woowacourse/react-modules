import { Validator } from './types';

interface UseValidationProps {
  validators: Validator[] | null;
}

export default function useValidation({ validators }: UseValidationProps) {
  if (!validators) return { validate: null };

  const validate = (value: string) => {
    const firstFailedTest = validators.find(({ test }) => !test(value));

    if (firstFailedTest) return { isValid: false, errorMessage: firstFailedTest.errorMessage };

    return { isValid: true, errorMessage: null };
  };

  return { validate };
}
