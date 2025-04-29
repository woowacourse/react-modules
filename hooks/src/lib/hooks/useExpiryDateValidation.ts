import { useState } from 'react';

type Props = {
  value: string;
  index: number;
};

const ExpireDateIndex = {
  MONTH: 0,
  YEAR: 1,
} as const;

const MONTH = {
  START: 1,
  END: 12,
} as const;

const EXPIRE_DATE_LENGTH = 2 as const;

export const useExpiryDateValidation = ({ value, index }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const currentYear = new Date().getFullYear() % 100;

  if (value.length < EXPIRE_DATE_LENGTH) {
    setErrorMessage(`${EXPIRE_DATE_LENGTH}자리의 숫자를 입력하셔야 합니다.`);
  }

  if (!/^\d{2}$/.test(value)) {
    setErrorMessage('숫자만 입력 가능합니다.');
  }

  if (
    index === ExpireDateIndex.MONTH &&
    (Number(value) < MONTH.START || Number(value) > MONTH.END)
  ) {
    return setErrorMessage('월은 1에서 12 사이의 숫자여야 합니다.');
  }

  if (index === ExpireDateIndex.YEAR && Number(value) < currentYear) {
    return setErrorMessage(`년도는 ${currentYear}년 이후여야 합니다.`);
  }

  return {
    isValid: Boolean(errorMessage),
    errorMessage,
  };
};
