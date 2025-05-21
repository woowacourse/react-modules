export const EXPIRY_DATE_KEY = {
  month: 'month',
  year: 'year',
} as const;
export type ExpiryDateKey = keyof typeof EXPIRY_DATE_KEY;
