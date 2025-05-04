import { useState } from 'react';

const CARD_NUMBER_RULE = {
  INVALID_LENGTH_ERROR: '카드 번호는 4자리로 입력해 주세요.',
  NOT_A_NUMBER: '카드 번호는 숫자로 입력해 주세요.',
  MAX_LENGTH: 4,
} as const;

type ValitationResult = {
  numbers: string[];
  error: errorType[];
  validate: (value: string, index: number) => void;
};

type errorType = {
  isValidate: boolean;
  errorMessage: string;
};

const initialError = {
  isValidate: false,
  errorMessage: '',
};

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState(['', '', '', '']);
  const [error, setError] = useState<errorType[]>(
    Array.from({ length: CARD_NUMBER_RULE.MAX_LENGTH }, () => initialError)
  );

  const updateError = (index: number, isError: boolean, message: string) => {
    setError((prev) => {
      prev[index] = {
        isValidate: isError,
        errorMessage: message,
      };
      return prev;
    });
  };

  const validate = (value: string, index: number) => {
    if (value.length > CARD_NUMBER_RULE.MAX_LENGTH) return;

    setNumbers((prev) => {
      const newNumbers = [...prev];
      newNumbers[index] = value;
      return newNumbers;
    });

    if (value === '') {
      updateError(index, false, '');
      return;
    }

    if (!/^\d*$/.test(value)) {
      updateError(index, true, CARD_NUMBER_RULE.NOT_A_NUMBER);
      return;
    }
    if (value.length < CARD_NUMBER_RULE.MAX_LENGTH) {
      updateError(index, true, CARD_NUMBER_RULE.INVALID_LENGTH_ERROR);
      return;
    }
    updateError(index, false, '');
  };

  return { numbers, error, validate };
}
