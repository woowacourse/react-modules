import { ChangeEvent, FocusEvent, useState } from 'react';
import useValidation, { ValidationType } from '../common/useValidation';

type CardCompanyType = 'BC카드' | '신한카드' | '카카오뱅크' | '현대카드' | '우리카드' | '롯데카드' | '하나카드' | '국민카드' | '';

const CARD_COMPANY = {
  '': '카드사를 선택해주세요',
  BC카드: 'BC카드',
  신한카드: '신한카드',
  카카오뱅크: '카카오뱅크',
  현대카드: '현대카드',
  우리카드: '우리카드',
  롯데카드: '롯데카드',
  하나카드: '하나카드',
  국민카드: '국민카드',
} as const;

const inputValidations: ValidationType<CardCompanyType>[] = [
  {
    validate: (value) => value !== '',
    message: '카드사를 선택해주세요.',
  },
];

const preventInputValidations: ValidationType<CardCompanyType>[] = [
  {
    validate: (value) => !!CARD_COMPANY[value],
    message: '카드사를 올바르게 선택해주세요.',
  },
];

const useCardCompany = (initialValue = '') => {
  const [value, setValue] = useState(initialValue);
  const { error, validateValue } = useValidation<CardCompanyType>();
  const isValid = value !== '' && !error.state;

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const targetValue = e.target.value as CardCompanyType;
    const preventInputValidateResult = validateValue(targetValue, preventInputValidations);

    if (!preventInputValidateResult) return;

    validateValue(targetValue, inputValidations);
    setValue(targetValue);
  };

  const onBlurHandler = (e: FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    const targetValue = e.target.value as CardCompanyType;
    validateValue(targetValue, inputValidations);
  };

  return { value, isValid, error, onChange: onChangeHandler, onBlur: onBlurHandler };
};

export default useCardCompany;
