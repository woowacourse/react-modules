import { ChangeEvent, useState } from 'react';
import isInteger from '../validate/isInteger';
import isUnderMaxLength from '../validate/isUnderMaxLength';
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

type TYPE_OF_CARD_NUMBERS_IS_ERROR = {
  FIRST: boolean;
  SECOND: boolean;
  THIRD: boolean;
  FOURTH: boolean;
};
const INITIAL_IS_ERROR: TYPE_OF_CARD_NUMBERS_IS_ERROR = {
  FIRST: false,
  SECOND: false,
  THIRD: false,
  FOURTH: false,
};

export const CARD_NUMBER_MAX_LENGTH = 4;

export const CARD_NUMBER_ERROR_MESSAGE = {
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
      const input = event.target.value.trim();
      const { inputError, inputErrorMessage } = getCardNumbersError(input);

      if (inputError) {
        changeError(target, inputErrorMessage);
        return;
      }

      clearError(target);
      setCardNumbers((prev) => ({
        ...prev,
        [target]: input,
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
      inputError: true,
      inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC,
    };
  }

  if (!isUnderMaxLength(input, 4)) {
    return {
      inputError: true,
      inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH,
    };
  }

  return {
    inputError: false,
    inputErrorMessage: '',
  };
}
