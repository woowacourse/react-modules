import { useState } from 'react';
import isInteger from '../validate/isInteger';
import isUnderMaxLength from '../validate/isUnderMaxLength';
import useError from '../useError/useError';
import getCardNetwork from './getCardNetwork';
import {
  AMEX_CARD_NUMBER_LENGTH_BY_POSITION,
  DINERS_CARD_NUMBER_LENGTH_BY_POSITION,
  VISA_CARD_NUMBER_LENGTH_BY_POSITION,
} from '../constants/cardNumberlengthByPosition';

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
  INVALID_LENGTH(length) {
    return `카드 번호는 ${length}자리 숫자여야 합니다.`;
  },
  NOT_NUMBERIC: '숫자만 입력 가능합니다.',
} as const;

export type CardNumbersKeys = 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH';

export default function useCardNumbers(userCardNumbers = INITIAL_CARD_NUMBER) {
  const [cardNumbers, setCardNumbers] = useState<CardNumbers>(userCardNumbers);
  const { error, changeError, clearError } = useError(INITIAL_IS_ERROR);
  const cardNetwork = getCardNetwork(Object.values(cardNumbers).join(''));

  function handleCardNumbersChange({ target }: { target: CardNumbersKeys }) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      const input = event.target.value.trim();
      const { inputError, inputErrorMessage } = getCardNumbersError({
        input,
        target,
        cardNetwork,
      });

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

export type CardNetWorks = 'VISA' | 'MASTER' | 'AMEX' | 'DINERS' | 'UNIONPAY';

type getCardNumbersErrorProps = {
  input: string;
  target: 'FIRST' | 'SECOND' | 'THIRD' | 'FOURTH';
  cardNetwork: CardNetWorks | undefined;
};

function getCardNumbersError({
  input,
  target,
  cardNetwork,
}: getCardNumbersErrorProps) {
  if (!isInteger(input)) {
    return {
      inputError: true,
      inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.NOT_NUMBERIC,
    };
  }

  if (cardNetwork === undefined) {
    return {
      inputError: false,
      inputErrorMessage: '',
    };
  }

  if (
    cardNetwork === 'VISA' ||
    cardNetwork === 'MASTER' ||
    cardNetwork === 'UNIONPAY'
  ) {
    if (!isUnderMaxLength(input, 4)) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          VISA_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }
  }

  if (cardNetwork === 'DINERS') {
    if (
      target === 'FIRST' &&
      !isUnderMaxLength(input, DINERS_CARD_NUMBER_LENGTH_BY_POSITION.FIRST)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          DINERS_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'SECOND' &&
      !isUnderMaxLength(input, DINERS_CARD_NUMBER_LENGTH_BY_POSITION.SECOND)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          DINERS_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'THIRD' &&
      !isUnderMaxLength(input, DINERS_CARD_NUMBER_LENGTH_BY_POSITION.THIRD)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          DINERS_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'FOURTH' &&
      !isUnderMaxLength(input, DINERS_CARD_NUMBER_LENGTH_BY_POSITION.FOURTH)
    ) {
      return {
        inputError: true,
        inputErrorMessage: `해당 자리는 입력할 수 없습니다.`,
      };
    }
  }

  if (cardNetwork === 'AMEX') {
    if (
      target === 'FIRST' &&
      !isUnderMaxLength(input, AMEX_CARD_NUMBER_LENGTH_BY_POSITION.FIRST)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          AMEX_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'SECOND' &&
      !isUnderMaxLength(input, AMEX_CARD_NUMBER_LENGTH_BY_POSITION.SECOND)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          AMEX_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'THIRD' &&
      !isUnderMaxLength(input, AMEX_CARD_NUMBER_LENGTH_BY_POSITION.THIRD)
    ) {
      return {
        inputError: true,
        inputErrorMessage: CARD_NUMBER_ERROR_MESSAGE.INVALID_LENGTH(
          AMEX_CARD_NUMBER_LENGTH_BY_POSITION[target]
        ),
      };
    }

    if (
      target === 'FOURTH' &&
      !isUnderMaxLength(input, AMEX_CARD_NUMBER_LENGTH_BY_POSITION.FOURTH)
    ) {
      return {
        inputError: true,
        inputErrorMessage: `해당 자리는 입력할 수 없습니다.`,
      };
    }
  }

  return {
    inputError: false,
    inputErrorMessage: '',
  };
}
