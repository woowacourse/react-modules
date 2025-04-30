import { useState, ChangeEvent } from 'react';
import { CardExpiryDate, CardExpiryDateError } from '../types/cardTypes';
import { isOnlyDigits } from '../utils/validateNumber';
import { CARD_EXPIRATION_ERROR } from '../constants/errorMessages';
import { CARD_EXPIRATION } from '../constants/cardConfig';

export const useCardExpiryPeriod = (
  initialCardExpiryDate: CardExpiryDate,
  initialCardExpiryDateError: CardExpiryDateError,
) => {
  const [cardExpirationDate, setCardExpirationDate] = useState<CardExpiryDate>(initialCardExpiryDate);
  const [cardExpirationDateError, setCardExpirationDateError] =
    useState<CardExpiryDateError>(initialCardExpiryDateError);

  const handleCardExpiryChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const isNumber = isOnlyDigits(value);

    if (!isNumber && value !== '') {
      setCardExpirationDateError({
        ...cardExpirationDateError,
        [name]: CARD_EXPIRATION_ERROR.onlyNumbers,
      });
      return;
    }

    setCardExpirationDate({
      ...cardExpirationDate,
      [name]: value,
    });

    setCardExpirationDateError({
      ...cardExpirationDateError,
      [name]: '',
    });

    if (name === 'month' && value.length > 0) {
      const monthValue = Number(value);
      if (monthValue < CARD_EXPIRATION.minMonth || monthValue > CARD_EXPIRATION.maxMonth) {
        setCardExpirationDateError({
          ...cardExpirationDateError,
          month: CARD_EXPIRATION_ERROR.invalidMonth,
        });
      }
    }

    if (name === 'year' && value.length === CARD_EXPIRATION.yearLength) {
      const yearValue = Number(value);
      if (yearValue < CARD_EXPIRATION.minYear) {
        setCardExpirationDateError({
          ...cardExpirationDateError,
          year: CARD_EXPIRATION_ERROR.invalidYear,
        });
      }
    }
  };

  const isCardExpirationValid = () => {
    const { month, year } = cardExpirationDate;

    const monthValue = Number(month);
    const yearValue = Number(year);

    return (
      month.length === CARD_EXPIRATION.monthLength &&
      year.length === CARD_EXPIRATION.yearLength &&
      monthValue >= CARD_EXPIRATION.minMonth &&
      monthValue <= CARD_EXPIRATION.maxMonth &&
      yearValue >= CARD_EXPIRATION.minYear &&
      !cardExpirationDateError.month &&
      !cardExpirationDateError.year
    );
  };

  return {
    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpiryChange,
    isCardExpirationValid,
  };
};
