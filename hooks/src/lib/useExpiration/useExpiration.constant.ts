export const MONTH_DETAILS = {
  january: 1,
  december: 12,
} as const;

export const EXPIRATION_ERROR_TYPE = {
  nonNumeric: 'NON_NUMERIC',
  invalidMonth: 'INVALID_MONTH',
  invalidExpirationDate: 'INVALID_EXPIRATION_DATE',
  notError: 'NOT_ERROR',
} as const;
