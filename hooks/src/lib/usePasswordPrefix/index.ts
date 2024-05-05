import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import getErrorMessage from '../utils/getErrorMessage';
import { useState } from 'react';

export default function usePasswordPrefix() {
  const [passwordPrefix, setPasswordPrefix] = useState('');
  const errorMessage = getErrorMessage(
    passwordPrefix,
    passwordPrefixValidators
  );

  const isValid = errorMessage === null;
  return { passwordPrefix, setPasswordPrefix, errorMessage, isValid };
}

const PASSWORD_PREFIX_LENGTH = 2;

export const PASSWORD_PREFIX_ERROR_MESSAGE = {
  invalidLength: `비밀번호 앞자리는 ${PASSWORD_PREFIX_LENGTH}자리여야 합니다.`,
  notDigit: '비밀번호는 숫자만 포함해야 합니다.',
} as const;

type ErrorMessage =
  (typeof PASSWORD_PREFIX_ERROR_MESSAGE)[keyof typeof PASSWORD_PREFIX_ERROR_MESSAGE];

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
