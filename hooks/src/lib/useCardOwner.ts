import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from './useValidation';
import Validation from './utils/validation';

const inputValidations: ValidationType<string>[] = [
  {
    validate: (value) => value !== '',
    message: '소유자 이름을 영어로 입력해주세요.',
  },
];

const preventInputValidations: ValidationType<string>[] = [
  {
    validate: Validation.isEnglishPattern,
    message: '영어만 입력 가능합니다.',
  },
];

const useCardOwner = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const { error, validateValue } = useValidation<string>();
  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const preventInputValidateResult = validateValue(e.target.value, preventInputValidations);

    if (!preventInputValidateResult) return;

    validateValue(e.target.value, inputValidations);
    setValue(e.target.value);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
    validateValue(e.target.value, inputValidations);
  };

  return { value, isValid, error, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardOwner;
