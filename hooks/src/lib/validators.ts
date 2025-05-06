export const checkIsNumber = (value: string) => /^[0-9]*$/.test(value);
export const checkIsValidLength = (value: string, maxLength: number) =>
  value.length <= maxLength;
export const checkIsInRange = (value: number, min: number, max: number) =>
  value >= min && value <= max;
export const checkIsExpiredDate = (month: string, year: string) => {
  if (month.length !== 2 || year.length !== 2) return false;

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;

  const expiryYear = 2000 + Number(year);
  const expiryMonth = Number(month);

  if (expiryYear < currentYear) return true;
  if (expiryYear === currentYear && expiryMonth <= currentMonth) return true;
  return false;
};
