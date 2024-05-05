import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from './useValidation';

const inputValidations: ValidationType<string>[] = [
  {
    validate: (value) => value !== '',
    message: '카드사를 선택해주세요.',
  },
];

const useCardCompany = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const { error, validateValue } = useValidation<string>();
  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    validateValue(e.target.value, inputValidations);
    setValue(e.target.value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    validateValue(e.target.value, inputValidations);
  };

  return { value, isValid, error, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardCompany;
