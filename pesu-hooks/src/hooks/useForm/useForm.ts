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
  const [errors, setErrors] = useState<TState>(defaultValues);

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

  const isDirty = Object.values(errors).some((error) => error === '');
  const isAllDirty = Object.values(value).every((value) => value !== '');
  const isValid = isAllDirty && Object.values(errors).every((error) => error === '');

  return { value, errors, register, isValid, isDirty, isAllDirty };
}
