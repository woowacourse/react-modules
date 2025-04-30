import { useState } from 'react';
import isInteger from '../../validate/isInteger';
import isUnderMaxLength from '../../validate/isUnderMaxLength';
import useError from '../useError/useError';

type CardNumbers = {
  FIRST: string;
  SECOND: string;
  THIRD: string;
  FOURTH: string;
};

const INITIAL_CARD_NUMBER: CardNumbers = {
  FIRST: '',
  SECOND: '',
  THIRD: '',
  FOURTH: '',
};

const INITIAL_IS_ERROR: CardNumbers = {
  FIRST: '',
  SECOND: '',
  THIRD: '',
  FOURTH: '',
};

const CARD_NUMBER_MAX_LENGTH = 4;

const CARD_NUMBER_ERROR_MESSAGE = {
  INVALID_LENGTH: `카드 번호는 ${CARD_NUMBER_MAX_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC: '숫자만 입력 가능합니다.',
} as const;

type CardNumbersKeys = {
  target: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH';
};

export default function useCardNumbers(userCardNumbers = INITIAL_CARD_NUMBER) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>(userCardNumbers);
  const { error, changeError, clearError } = useError(INITIAL_IS_ERROR);

  function handleCardNumbersChange({ target }: CardNumbersKeys) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      const { isError, errorMessage } = getCardNumbersError(
        event.target.value.trim()
      );

      if (isError) {
        changeError(target, errorMessage);
        return;
      }

      clearError(target);
      setCardNumbers((prev) => ({
        ...prev,
        [target]: event.target.value.trim(),
      }));
    };
  }

  return {
    cardNumbers,
    isError: error.isError,
    errorMessage: error.errorMessage,
    handleCardNumbersChange,
  };
}

function getCardNumbersError(input: string) {
  if (!isInteger(input)) {
    return {
      isError: true,
      errorMessage: CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC,
    };
  }

  if (!isUnderMaxLength(input, 4)) {
    return {
      isError: true,
      errorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH,
    };
  }

  return {
    isError: false,
    errorMessage: '',
  };
}
