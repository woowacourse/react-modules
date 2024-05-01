import { ErrorStatus } from './errorStatus';

export interface ExpiryDateType {
  month: string;
  year: string;
}

export type ExpiryDateKeys = keyof ExpiryDateType;

export type ExpiryDateErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH
  | ErrorStatus.INVALID_DATE
  | ErrorStatus.INVALID_MONTH
  | ErrorStatus.INVALID_YEAR;
