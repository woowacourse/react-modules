export const CARD_NUMBER_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;
export type CardNumberErrorType = keyof typeof CARD_NUMBER_ERROR_TYPES;

export const EXPIRY_DATE_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
  invalidMonthRange: 'invalidMonthRange',
  expiredDate: 'expiredDate',
} as const;
export type ExpiryDateErrorType = keyof typeof EXPIRY_DATE_ERROR_TYPES;

export const CVC_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;
export type CVCErrorType = keyof typeof CVC_ERROR_TYPES;
