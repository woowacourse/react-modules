import { useState } from 'react';
import { Validation } from './types';
import { validate } from './utils';

type UseFormProps<T extends Record<string, string>> = {
  defaultValues: T;
  validation?: Record<keyof T, Validation>;
  inputRegex?: Record<keyof T, RegExp>;
};

export default function useForm<T extends Record<string, string>>({
  defaultValues,
  validation,
  inputRegex,
}: UseFormProps<T>) {
  const [value, setValue] = useState<T>(defaultValues);
  const [errors, setErrors] = useState<T>(defaultValues);

  const register = <E extends HTMLInputElement | HTMLSelectElement>(
    currentKey: keyof T,
    options?: {
      onChange?: (event: React.ChangeEvent<E>) => void;
    },
  ) => {
    return {
      value: value[currentKey],
      onChange: (event: React.ChangeEvent<E>) => {
        if (inputRegex?.[currentKey] && !inputRegex[currentKey].test(event.target.value)) return;

        options?.onChange?.(event);
        setValue((prev) => ({ ...prev, [currentKey]: event.target.value }));

        if (validation?.[currentKey])
          setErrors((prev) => ({
            ...prev,
            [currentKey]: validate(validation[currentKey], event.target.value),
          }));
      },
    };
  };

  const isDirty = Object.values(errors).some((error) => error === '');
  const isAllDirty = Object.values(value).every((value) => value !== '');
  const isValid = isAllDirty && Object.values(errors).every((error) => error === '');

  return { value, errors, register, isValid, isDirty, isAllDirty };
}
