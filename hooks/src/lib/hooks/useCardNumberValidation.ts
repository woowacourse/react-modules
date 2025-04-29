import { useState } from 'react';

type Props = {
  value: string;
  length: number;
};

export const useCardNumberValidation = ({ value, length }: Props) => {
  const [errorMessage, setErrorMessage] = useState('');

  if (!new RegExp(`^\\d{${length}}$`).test(value)) {
    setErrorMessage('숫자만 입력 가능합니다.');
  }

  if (value.length < length) {
    setErrorMessage(`${length}자리의 숫자를 입력하셔야 합니다.`);
  }

  return {
    isValid: Boolean(errorMessage),
    errorMessage,
  };
};
