import { useState, ChangeEvent, FocusEvent } from 'react';
import { validateLengthLess } from '@/validate/validate';

type validateType = (value: string) => void;

const useInput = <T>(
  initialValue: string = '',
  validate: validateType,
  validLength?: number
) => {
  const [value, setValue] = useState(initialValue);
  const [errorStatus, setErrorStatus] = useState<T | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    try {
      validate(value);
      setValue(value);
      setErrorStatus(null);
    } catch (e) {
      if (e instanceof Error) {
        setErrorStatus(e.message as T);
      }
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    try {
      validLength && validateLengthLess(value, validLength);
    } catch (e) {
      if (e instanceof Error) {
        setErrorStatus(e.message as T);
      }
    }
  };

  return {
    value,
    onChange: handleChange,
    onBlurValidLength: handleBlur,
    errorStatus,
  };
};
export default useInput;
