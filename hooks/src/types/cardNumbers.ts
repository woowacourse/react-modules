import { ErrorStatus } from './errorStatus';

export interface CardNumbers {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export type CardNumberKeys = keyof CardNumbers;

export type CardNumbersError =
  | ErrorStatus.INVALID_LENGTH
  | ErrorStatus.IS_NOT_NUMBER;
