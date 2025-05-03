import { useMemo, useState } from 'react';
import { CardFieldHook } from '../types/card';

function createCardField<T extends string>(
  initialState: T,
  validationFunctions: Array<(value: T) => string | undefined>,
): CardFieldHook<T> {
  const [value, setValue] = useState<T>(initialState);

  const error = useMemo(() => {
    for (const validateFn of validationFunctions) {
      const error = validateFn(value);
      if (error) return error;
    }
    return '';
  }, [value]);

  const handleChange = (newValue: T) => {
    setValue(newValue);
  };

  return { value, handleChange, error };
}

export default createCardField;
