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

    setCardExpirationDateError(prevErrors => ({
      ...prevErrors,
      [name]: null,
    }));

    if (name === 'month' && value.length > 0) {
      const monthValue = Number(value);
      if (monthValue < CARD_EXPIRATION.minMonth || monthValue > CARD_EXPIRATION.maxMonth) {
        setCardExpirationDateError(prevErrors => ({
          ...prevErrors,
          month: CARD_EXPIRATION_ERROR.invalidMonth,
        }));
      } else {
        setCardExpirationDateError(prevErrors => ({
          ...prevErrors,
          month: null,
        }));
      }
    }

    if (name === 'year' && value.length === CARD_EXPIRATION.yearLength) {
      const yearValue = Number(value);
      if (yearValue < CARD_EXPIRATION.minYear || yearValue > CARD_EXPIRATION.maxYear) {
        setCardExpirationDateError(prevErrors => ({
          ...prevErrors,
          year: CARD_EXPIRATION_ERROR.invalidYear,
        }));
      } else {
        setCardExpirationDateError(prevErrors => ({
          ...prevErrors,
          year: null,
        }));
      }
    }
  };

  const isCardExpirationValid = () => {
    const { month, year } = cardExpirationDate;

    const monthValue = Number(month);
    const yearValue = Number(year);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;

    return (
      month.length === CARD_EXPIRATION.monthLength &&
      year.length === CARD_EXPIRATION.yearLength &&
      monthValue >= CARD_EXPIRATION.minMonth &&
      monthValue <= CARD_EXPIRATION.maxMonth &&
      yearValue >= CARD_EXPIRATION.minYear &&
      yearValue <= CARD_EXPIRATION.maxYear &&
      (yearValue > currentYear || (yearValue === currentYear && monthValue >= currentMonth)) &&
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
