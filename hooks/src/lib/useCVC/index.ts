import { Validator, ValueOf } from '../type';

import REGEXPS from '../constants/regExps';
import getErrorMessage from '../utils/getErrorMessage';
import getOnChange from '../utils/getOnChange';
import { useState } from 'react';

export default function useCVC() {
  const [cvc, setCVC] = useState('');

  const onChange = getOnChange(setCVC);

  const errorMessage = getErrorMessage(cvc, cvcValidators);

  const isValid = errorMessage === null;

  return { cvc, setCVC, onChange, errorMessage, isValid };
}

const CVC_LENGTH = 3;

export const CVC_ERROR_MESSAGE = {
  invalidLength: `CVC는 ${CVC_LENGTH}자리여야 합니다.`,
  notDigit: 'CVC 값은 숫자만 포함해야 합니다.',
} as const;

type ErrorMessage = ValueOf<typeof CVC_ERROR_MESSAGE>;

const cvcValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (cvc: string) => cvc.length === CVC_LENGTH,
    message: CVC_ERROR_MESSAGE.notDigit,
  },
  {
    checkIsValid: (cvc: string) => REGEXPS.onlyDigitNumber.test(cvc),
    message: CVC_ERROR_MESSAGE.notDigit,
  },
];
