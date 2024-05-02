import { MONTH_DETAILS } from './useExpiration.constant';

export const isInvalidMonth = (month: string): boolean => {
  const formattedMonth = Number(month);

  return formattedMonth < MONTH_DETAILS.january || formattedMonth > MONTH_DETAILS.december;
};

const calculateLastDayOfMonth = (month: string, year: string) => {
  const lastDayOfMonth = new Date(Number(`20${year}`), Number(month), 0);

  return lastDayOfMonth;
};

export const isPastExpirationDate = (month: string, year: string): boolean => {
  const lastDayOfMonth = calculateLastDayOfMonth(month, year);

  const currentDate = new Date();

  return lastDayOfMonth < currentDate;
};
