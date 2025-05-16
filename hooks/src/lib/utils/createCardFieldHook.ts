// hooks/createCardFieldHook.ts
import { useState, useMemo } from 'react';
import { validationResult, CardFieldHook } from '../card.type';

export default function createCardFieldHook<T extends string>(
  initialValue: T,
  validators: Array<(value: T) => validationResult>,
): CardFieldHook<T> {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (newValue: T) => {
    setValue(newValue);
  };

  const errorMessage = useMemo(() => {
    for (const validate of validators) {
      const { isValid, errorMessage } = validate(value);
      if (!isValid && errorMessage) return errorMessage;
    }
    return '';
  }, [value, validators]);

  return { value, handleChange, errorMessage };
}
