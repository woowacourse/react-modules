import { useMemo, useState } from 'react';
import { CardFieldHook, validationResult } from '../types/card';

function createCardField<T extends string>(
  initialState: T,
  validationFunctions: Array<(value: T) => validationResult>,
): CardFieldHook<T> {
  const [value, setValue] = useState<T>(initialState);

  const errorMessage = useMemo(() => {
    for (const validateFn of validationFunctions) {
      const { isValid, errorMessage } = validateFn(value);
      if (!isValid && errorMessage) return errorMessage;
    }
    return '';
  }, [value]);

  const handleChange = (newValue: T) => {
    setValue(newValue);
  };

  return { value, handleChange, errorMessage };
}

export default createCardField;
