type Validator = (value: string, compareValue?: number | string) => boolean;

const isInvalidValue = (
  value: string,
  length: number,
  condition: boolean = false
): boolean => {
  return (
    value.trim() !== "" &&
    (Number.isNaN(Number(value)) || value.length < length || condition)
  );
};

export const validateCardNumber: Validator = (value, length) => {
  return (
    value.trim() !== "" &&
    !Number.isNaN(Number(value)) &&
    value.length === length
  );
};

export const validateCardCompany: Validator = (value, defaultValue) => {
  return value !== defaultValue;
};

export const validateMonthFormat = (month: string) => {
  return /^(0[1-9]|1[0-2])$/.test(month);
};

export const validateYearFormat = (year: string) => {
  return /^(0\d|[1-9]\d|\d{2})$/.test(year);
};

export const isExpirationUpToDate = (month: string, year: string) => {
  const now = new Date();
  const currentYear = now.getFullYear().toString().slice(-2);
  const currentMonth = (now.getMonth() + 1).toString();

  if (Number(year) < Number(currentYear)) return false;
  if (Number(year) === Number(currentYear)) {
    return Number(month) >= Number(currentMonth);
  }
  return true;
};

export const validateCardExpiration = (month: string, year: string) => {
  const isValidMonth = validateMonthFormat(month);
  const isValidYear = validateYearFormat(year);

  if (!isValidMonth || !isValidYear) return false;

  return isExpirationUpToDate(month, year);
};

export const validateUserName: Validator = (value, length) => {
  return (
    value.trim() !== "" && new RegExp(`^[A-Z\\s]{0,${length}}$`).test(value)
  );
};

export const validateCVC: Validator = (value, length) => {
  return !isInvalidValue(value, length as number, value.length !== length);
};

export const validatePassword: Validator = (value, length) => {
  return !isInvalidValue(value, length as number, value.length !== length);
};
