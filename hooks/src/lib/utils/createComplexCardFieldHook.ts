import { useState, useMemo } from 'react';
import { validationResult } from '../card.type';

function createComplexCardFieldHook<T extends Record<string, string>>(
  initialState: T,
  validators: Array<(value: T) => validationResult>,
) {
  const [value, setValue] = useState<T>(initialState);

  const handleChange = (key: keyof T, newValue: string) => {
    setValue((prev) => ({ ...prev, [key]: newValue }));
  };

  const errorMessage = useMemo(() => {
    for (const validateFn of validators) {
      const { isValid, errorMessage } = validateFn(value);
      if (!isValid && errorMessage) return errorMessage;
    }
    return '';
  }, [value, validators]);

  return { value, handleChange, errorMessage };
}

export default createComplexCardFieldHook;
