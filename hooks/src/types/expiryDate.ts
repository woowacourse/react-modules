import { ErrorStatus } from '@/types/errorStatus';

export interface ExpiryDate {
  month: string;
  year: string;
}

export type ExpiryDateKeys = keyof ExpiryDate;

export type ExpiryDateError =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH
  | ErrorStatus.INVALID_DATE
  | ErrorStatus.INVALID_MONTH
  | ErrorStatus.INVALID_YEAR;
