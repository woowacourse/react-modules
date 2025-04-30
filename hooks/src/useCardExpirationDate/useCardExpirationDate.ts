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

const INITIAL_IS_ERROR: CardExpirationDate = {
  MONTH: '',
  YEAR: '',
};

type CardExpirationDateKeys = {
  target: 'MONTH' | 'YEAR';
};

export default function useCardExpirationDate(
  userCardExpirationDate = INITIAL_CARD_EXPIRATION_DATE
) {
  const [expriationDate, setExpriationDate] = useState(userCardExpirationDate);
  const { error, changeError, clearError } = useError(INITIAL_IS_ERROR);

  function handleCardExpirationDateChange({ target }: CardExpirationDateKeys) {
    return function (event: React.ChangeEvent<HTMLInputElement>) {
      const { isError, errorMessage } = getCardExpirationDateError(
        event.target.value.trim(),
        target,
        expriationDate
      );

      if (isError) {
        changeError(target, errorMessage);
        return;
      }

      clearError(target);
      setExpriationDate((prev) => ({
        ...prev,
        [target]: event.target.value.trim(),
      }));
    };
  }

  return {
    expriationDate,
    isError: error.isError,
    errorMessage: error.errorMessage,
    handleCardExpirationDateChange,
  };
}

function getCardExpirationDateError(
  input: string,
  target: string,
  expriationDate: CardExpirationDate
) {
  if (!isUnderMaxLength(input, 2))
    return { isError: true, errorMessage: '유효기간은 2자리 숫자여야 합니다.' };

  if (!isInteger(input))
    return {
      isError: true,
      errorMessage: '유효기간은 숫자만 입력 가능합니다.',
    };

  if (input.length < 2) return { isError: false, errorMessage: '' };

  if (target === 'MONTH' && isValidMonth(Number(input)))
    return {
      isError: true,
      errorMessage: '유효기간은 1~12 사이의 숫자여야 합니다.',
    };

  if (isValidDate(target, Number(input), expriationDate))
    return {
      isError: true,
      errorMessage: '유효기간은 현재 날짜보다 이후여야 합니다.',
    };

  return { isError: false, errorMessage: '' };
}

function isValidMonth(month: number) {
  return 1 <= month && month <= 12;
}

function isValidDate(
  target: string,
  input: number,
  expirationDate: CardExpirationDate
) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear() % 100;
  const currentMonth = currentDate.getMonth() + 1;

  if (target === 'YEAR' && input < currentYear) return false;
  if (
    target === 'MONTH' &&
    Number(expirationDate.YEAR) === currentYear &&
    input < currentMonth
  )
    return false;

  return true;
}
