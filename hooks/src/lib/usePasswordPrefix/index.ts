import { Validator, ValueOf } from '../type';

import REGEXPS from '../constants/regExps';
import getErrorMessage from '../utils/getErrorMessage';
import getOnChange from '../utils/getOnChange';
import { useState } from 'react';

export default function usePasswordPrefix() {
  const [passwordPrefix, setPasswordPrefix] = useState('');

  const onChange = getOnChange(setPasswordPrefix);

  const errorMessage = getErrorMessage(
    passwordPrefix,
    passwordPrefixValidators
  );

  const isValid = errorMessage === null;
  return { passwordPrefix, setPasswordPrefix, onChange, errorMessage, isValid };
}

const PASSWORD_PREFIX_LENGTH = 2;

export const PASSWORD_PREFIX_ERROR_MESSAGE = {
  invalidLength: `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리여야 합니다.`,
  notDigit: '비밀번호는 숫자만 포함해야 합니다.',
} as const;

type ErrorMessage = ValueOf<typeof PASSWORD_PREFIX_ERROR_MESSAGE>;

const passwordPrefixValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (prefix: string) => prefix.length === PASSWORD_PREFIX_LENGTH,
    message: PASSWORD_PREFIX_ERROR_MESSAGE.invalidLength,
  },
  {
    checkIsValid: (prefix: string) => REGEXPS.onlyDigitNumber.test(prefix),
    message: PASSWORD_PREFIX_ERROR_MESSAGE.notDigit,
  },
];
