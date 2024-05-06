import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from '../common/useValidation';
import Validation from '../utils/validation';

const EXPIRATION_DATE_LENGTH = 2;

const inputValidations: ValidationType<string>[] = [
  {
    validate: (value) => Validation.isExactLength(EXPIRATION_DATE_LENGTH, value),
    message: `${EXPIRATION_DATE_LENGTH}자리 년도(YY)를 입력해주세요. ex) 24`,
  },
];

const preventInputValidations: ValidationType<string>[] = [
  {
    validate: Validation.isNumericPattern,
    message: '숫자만 입력할 수 있습니다.',
  },
];

const useYearInput = (initialValue = '') => {
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

  return { value, error, isValid, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useYearInput;
