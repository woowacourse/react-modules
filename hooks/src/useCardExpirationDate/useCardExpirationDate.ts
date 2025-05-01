import { useState } from 'react';
import useError from '../useError/useError';
import isUnderMaxLength from '../../validate/isUnderMaxLength';
import isInteger from '../../validate/isInteger';

type CardExpirationDate = {
  MONTH: string;
  YEAR: string;
};

const INITIAL_CARD_EXPIRATION_DATE: CardExpirationDate = {
  MONTH: '',
  YEAR: '',
};
type TYPE_OF_CARD_EXPIRATION_DATE_IS_ERROR = {
  MONTH: boolean;
  YEAR: boolean;
};
const INITIAL_IS_ERROR: TYPE_OF_CARD_EXPIRATION_DATE_IS_ERROR = {
  MONTH: false,
  YEAR: false,
};

type CardExpirationDateKeys = {
  target: 'MONTH' | 'YEAR';
};

export const CARD_EXPIRATION_DATE_MAX_LENGTH = 2;

export const CARD_EXPIRATION_DATE_ERROR_MESSAGE = {
  INVALID_LENGTH: `유효기간은 ${CARD_EXPIRATION_DATE_MAX_LENGTH}자리 숫자여야 합니다.`,
  NOT_NUMBERIC: '유효기간은 숫자만 입력 가능합니다.',
  INVALID_MONTH_RANGE: '1~12 사이의 숫자를 입력해주세요.',
  INVALID_DATE: '유효기간은 현재 날짜보다 이후여야 합니다.',
} as const;

export default function useCardExpirationDate(
  userCardExpirationDate = INITIAL_CARD_EXPIRATION_DATE
) {
  const [cardExpirationDate, setCardExpirationDate] = useState(
    userCardExpirationDate
  );
  const { error, changeError, clearError } = useError(INITIAL_IS_ERROR);

  function handleCardExpirationDateChange({ target }: CardExpirationDateKeys) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      const input = event.target.value.trim();
      const { inputError, inputErrorMessage } = getCardExpirationDateError(
        input,
        target,
        cardExpirationDate
      );

      if (inputError) {
        changeError(target, inputErrorMessage);
        return;
      }

      clearError(target);
      setCardExpirationDate((prev) => ({
        ...prev,
        [target]: input,
      }));
    };
  }

  return {
    cardExpirationDate,
    isError: error.isError,
    errorMessage: error.errorMessage,
    handleCardExpirationDateChange,
  };
}

function getCardExpirationDateError(
  input: string,
  target: string,
  CardExpirationDate: CardExpirationDate
) {
  if (!isUnderMaxLength(input, CARD_EXPIRATION_DATE_MAX_LENGTH))
    return {
      inputError: true,
      inputErrorMessage: CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_LENGTH,
    };

  if (!isInteger(input))
    return {
      inputError: true,
      inputErrorMessage: CARD_EXPIRATION_DATE_ERROR_MESSAGE.NOT_NUMBERIC,
    };

  if (input.length < CARD_EXPIRATION_DATE_MAX_LENGTH)
    return { inputError: false, inputErrorMessage: '' };

  if (target === 'MONTH' && !isValidMonth(Number(input)))
    return {
      inputError: true,
      inputErrorMessage: CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_MONTH_RANGE,
    };

  if (!isValidDate(target, Number(input), CardExpirationDate))
    return {
      inputError: true,
      inputErrorMessage: CARD_EXPIRATION_DATE_ERROR_MESSAGE.INVALID_DATE,
    };

  return { inputError: false, inputErrorMessage: '' };
}

function isValidMonth(month: number) {
  return 1 <= month && month <= 12;
}

function isValidDate(
  target: string,
  input: number,
  CardExpirationDate: CardExpirationDate
) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (target === 'YEAR' && input < currentYear) return false;
  if (
    target === 'MONTH' &&
    Number(CardExpirationDate.YEAR) === currentYear &&
    input < currentMonth
  )
    return false;

  return true;
}
