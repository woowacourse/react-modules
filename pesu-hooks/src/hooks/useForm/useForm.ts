import { useState } from 'react';
import { Validation } from './types';
import { validate } from './utils';

type UseFormProps<TState extends Record<string, string>> = {
  defaultValues: TState;
  validation?: Record<keyof TState, Validation> | ((value: TState) => Record<keyof TState, Validation>);
  inputRegex?: Record<keyof TState, RegExp>;
};

export default function useForm<TState extends Record<string, string>>({
  defaultValues,
  validation,
  inputRegex,
}: UseFormProps<TState>) {
  const [value, setValue] = useState<TState>(defaultValues);
  const [errors, setErrors] = useState<TState>(
    Object.keys(defaultValues).reduce((acc, key) => ({ ...acc, [key]: '' }), {} as TState),
  );

  const register = <UElement extends HTMLInputElement | HTMLSelectElement>(
    currentKey: keyof TState,
    options?: {
      onChange?: (event: React.ChangeEvent<UElement>) => void;
    },
  ) => {
    return {
      value: value[currentKey],
      onChange: (event: React.ChangeEvent<UElement>) => {
        if (inputRegex?.[currentKey] && !inputRegex[currentKey].test(event.target.value)) return;

        options?.onChange?.(event);
        setValue((prev) => ({ ...prev, [currentKey]: event.target.value }));

        if (validation) {
          const validationObject = typeof validation === 'function' ? validation(value) : validation;
          setErrors((prev) => ({
            ...prev,
            [currentKey]: validate(validationObject[currentKey], event.target.value),
          }));
        }
      },
    };
  };

  const isDirty = Object.entries(value).some(([key, val]) => val !== defaultValues[key]);
  const isAllDirty = Object.entries(value).every(([key, val]) => val !== defaultValues[key]);
  const isValid = Object.values(errors).every((error) => error === '');

  return { value, errors, register, isValid, isDirty, isAllDirty };
}
