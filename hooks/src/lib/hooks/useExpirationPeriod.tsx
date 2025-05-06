import { useState } from 'react';
import { parseNumber } from '../utils/parseNumber';
import { validateExpiry, ValidationResult, ExpiryField } from '../utils/validateExpiry';

export type ExpirationPeriod = {
  month: string;
  year: string;
};

function useExpirationPeriod() {
  const [expirationPeriod, setExpirationPeriod] = useState<ExpirationPeriod>({
    month: '',
    year: '',
  });

  const [isExpirationPeriodError, setExpirationPeriodError] = useState({
    month: false,
    year: false,
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onChangeExpirationPeriod = (e: React.ChangeEvent<HTMLInputElement>, type: ExpiryField) => {
    const originValue = e.target.value;
    const value = parseNumber(originValue);

    if (value.length > 2) return;

    const nextPeriod = {
      ...expirationPeriod,
      [type]: value,
    };

    const { message, field }: ValidationResult = validateExpiry(nextPeriod.month, nextPeriod.year, type);

    setExpirationPeriodError({
      month: field === 'month',
      year: field === 'year',
    });

    setErrorMessage(message);
    setExpirationPeriod(nextPeriod);
  };

  return {
    expirationPeriod,
    isExpirationPeriodError,
    onChangeExpirationPeriod,
    errorMessage,
  };
}

export default useExpirationPeriod;
