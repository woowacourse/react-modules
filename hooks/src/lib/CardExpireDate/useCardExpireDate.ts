import { useState } from 'react';

import useCardExpireDateValidate from './useCardExpireDateValidate';

type CardExpireDate = {
  month: string;
  year: string;
};

export type CardExpireDateResult = {
  expireDate: CardExpireDate;
  errorMessage: string | null;
  isValid: {
    month: boolean;
    year: boolean;
  };
  handleExpireDateChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: 'month' | 'year'
  ) => void;
};

const useCardExpireDate = (): CardExpireDateResult => {
  const [expireDate, setExpireDate] = useState<CardExpireDate>({
    month: '',
    year: ''
  });
  const { isValid, errorMessage, validateCardExpireDate } =
    useCardExpireDateValidate();

  const handleExpireDateChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: 'month' | 'year'
  ) => {
    const newExpireDate = {
      ...expireDate,
      [key]: e.target.value
    };

    validateCardExpireDate(newExpireDate, key);
    setExpireDate(newExpireDate);
  };

  return { expireDate, isValid, errorMessage, handleExpireDateChange };
};

export default useCardExpireDate;
