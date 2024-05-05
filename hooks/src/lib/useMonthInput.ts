import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from './useValidation';
import Validation from './utils/validation';

const EXPIRATION_DATE_LENGTH = 2;
const MONTH = {
  start: 1,
  end: 12,
} as const;

const inputValidations: ValidationType<string>[] = [
  {
    validate: (value) => Validation.isExactLength(EXPIRATION_DATE_LENGTH, value),
    message: `${EXPIRATION_DATE_LENGTH}자리 월(MM)을 입력해주세요. ex) 01`,
  },
  {
    validate: (value) => Validation.isMonthInRange(Number(value)),
    message: `${MONTH.start}부터 ${MONTH.end}사이의 숫자를 입력해주세요.`,
  },
];

const preventInputValidations: ValidationType<string>[] = [
  {
    validate: Validation.isNumericPattern,
    message: '숫자만 입력할 수 있습니다.',
  },
];

const useMonthInput = (initialValue = '') => {
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

export default useMonthInput;
