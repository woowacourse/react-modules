import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import { useState } from 'react';

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

export default function usePasswordPrefix() {
  const [passwordPrefix, setPasswordPrefix] = useState('');
  const errorMessage = passwordPrefixValidators.reduce(
    (message: ErrorMessage | null, validator) => {
      if (message !== null) return message;
      if (validator.checkIsValid(passwordPrefix)) return message;
      return validator.message;
    },
    null
  );

  const isValid = errorMessage === null;
  return { passwordPrefix, setPasswordPrefix, errorMessage, isValid };
}
