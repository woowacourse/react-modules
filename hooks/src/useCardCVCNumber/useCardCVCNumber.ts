import { useState } from 'react';
import useError from '../useError/useError';
import isInteger from '../../validate/isInteger';
import isUnderMaxLength from '../../validate/isUnderMaxLength';

const KEY = 'CVC';

const CARD_CVC_MAX_LENGTH = 3;

const CARD_CVC_ERROR_MESSAGE = {
  INVALID_LENGTH: `CVC 번호는  ${CARD_CVC_MAX_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC: '숫자만 입력 가능합니다.',
} as const;

export default function useCardCVCNumber(userCardCVCNumber = '') {
  const [cardCVCNumber, setCardCVCNumber] = useState(userCardCVCNumber);
  const { error, changeError, clearError } = useError({
    [KEY]: false,
  });

  function handleCardCVCNumberChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const { isError, errorMessage } = getCVCNumberError(
      event.target.value.trim()
    );

    if (isError) {
      changeError(KEY, errorMessage);
      return;
    }

    clearError(KEY);
    setCardCVCNumber(event.target.value.trim());
  }

  return {
    cardCVCNumber,
    error: error.isError[KEY],
    errorMessage: error.errorMessage[KEY],
    handleCardCVCNumberChange,
  };
}

function getCVCNumberError(input: string) {
  if (!isInteger(input)) {
    return {
      isError: true,
      errorMessage: CARD_CVC_ERROR_MESSAGE.NOT_NUMBERIC,
    };
  }

  if (!isUnderMaxLength(input, CARD_CVC_MAX_LENGTH)) {
    return {
      isError: true,
      errorMessage: CARD_CVC_ERROR_MESSAGE.INVALID_LENGTH,
    };
  }
  return {
    isError: false,
    errorMessage: '',
  };
}
