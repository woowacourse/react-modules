import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from './useValidation';
import Validation from './utils/validation';

const CVC_LENGTH = 3;

const inputValidations: ValidationType<string>[] = [
  {
    validate: (value) => Validation.isExactLength(CVC_LENGTH, value),
    message: `${CVC_LENGTH}자리의 CVC번호를 입력해주세요.`,
  },
];

const preventInputValidations: ValidationType<string>[] = [
  {
    validate: Validation.isNumericPattern,
    message: '숫자만 입력할 수 있습니다.',
  },
];

const useCardCVC = (initialValue = '') => {
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

export default useCardCVC;
