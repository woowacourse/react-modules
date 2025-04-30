import { useState } from 'react';
import useError from '../useError/useError';
import isInteger from '../../validate/isInteger';
import isUnderMaxLength from '../../validate/isUnderMaxLength';

const KEY = 'cardPassword';
const CARD_PASSWORD_MAX_LENGTH = 2;

export default function useCardPassword(userCardPassword = '') {
  const [cardPassword, setCardPassword] = useState(userCardPassword);
  const { error, changeError, clearError } = useError({
    [KEY]: false,
  });

  function handleCardPasswordChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const input = event.target.value.trim();
    const { inputError, inputErrorMessage } = getCardPasswordError(input);

    if (inputError) {
      changeError(KEY, inputErrorMessage);
      return;
    }

    clearError(KEY);
    setCardPassword(input);
  }

  return {
    cardPassword,
    isError: error.isError[KEY],
    errorMessage: error.errorMessage[KEY],
    handleCardPasswordChange,
  };
}

function getCardPasswordError(input: string) {
  if (!isInteger(input)) {
    return {
      inputError: true,
      inputErrorMessage: '숫자만 입력 가능합니다.',
    };
  }

  if (!isUnderMaxLength(input, CARD_PASSWORD_MAX_LENGTH)) {
    return {
      inputError: true,
      inputErrorMessage: `카드 비밀번호는 ${CARD_PASSWORD_MAX_LENGTH}자리 숫자여야 합니다.`,
    };
  }

  return {
    inputError: false,
    inputErrorMessage: '',
  };
}
