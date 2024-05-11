import { Validator, ValueOf } from '../type';
import { useCallback, useState } from 'react';

import REGEXPS from '../constants/regExps';
import getErrorMessage from '../utils/getErrorMessage';
import getOnBlur from '../utils/getOnBlur';
import getOnChange from '../utils/getOnChange';

export default function usePasswordPrefix() {
  const [passwordPrefix, setPasswordPrefix] = useState('');

  const onChange = useCallback(() => getOnChange(setPasswordPrefix), []);

  const onBlur = useCallback(() => getOnBlur(setPasswordPrefix), []);

  const errorMessage = getErrorMessage(
    passwordPrefix,
    passwordPrefixValidators
  );

  const isValid = errorMessage === null;
  return { passwordPrefix, onChange, onBlur, errorMessage, isValid };
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
