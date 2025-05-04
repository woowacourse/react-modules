export type ExpiryField = 'month' | 'year';

const currentYear = Number(new Date().getFullYear().toString().slice(2));
const currentMonth = new Date().getMonth() + 1;

export const isMonthFormatValid = (month: string) => month.length === 2;
export const isMonthInRange = (month: number) => month >= 1 && month <= 12;

export const isYearFormatValid = (year: string) => year.length === 2;
export const isYearInFuture = (year: number) => year >= currentYear;

export const validateDateNotPast = (month: string, year: string): ExpiryField | null => {
  const monthNum = Number(month);
  const yearNum = Number(year);

  if (yearNum < currentYear) return 'year';
  if (yearNum === currentYear && monthNum < currentMonth) return 'month';

  return null;
};

export interface ValidationResult {
  message: string;
  field: ExpiryField | null;
}

export const validateExpiry = (monthStr: string, yearStr: string, focusType: ExpiryField): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  const month = Number(monthStr);
  const year = Number(yearStr);

  if (focusType === 'month') {
    if (!isMonthFormatValid(monthStr)) return { message: FORMAT_MSG, field: 'month' };
    if (!isMonthInRange(month)) return { message: MONTH_RANGE_MSG, field: 'month' };
  }

  if (focusType === 'year') {
    if (!isYearFormatValid(yearStr)) return { message: FORMAT_MSG, field: 'year' };
    if (!isYearInFuture(year)) return { message: INVALID_DATE_MSG, field: 'year' };
  }

  const invalidField = validateDateNotPast(monthStr, yearStr);
  if (invalidField) return { message: INVALID_DATE_MSG, field: invalidField };

  return { message: '', field: null };
};
