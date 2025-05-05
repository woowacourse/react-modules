const MONTH_RANGE = {
  MIN: 1,
  MAX: 12,
};

const YEAR_RANGE = {
  MIN: 25,
  MAX: 99,
};

export const isValidLength = (number: string, maxLength: number) => {
  return number.length >= maxLength;
};

export const isValidNumber = (number: string) => {
  const regex = /^[0-9]*$/;
  return regex.test(number);
};

export const isValidMonthRange = (number: string) => {
  return Number(number) >= MONTH_RANGE.MIN && Number(number) <= MONTH_RANGE.MAX;
};

export const isValidYearRange = (number: string) => {
  return Number(number) >= YEAR_RANGE.MIN && Number(number) <= YEAR_RANGE.MAX;
};
