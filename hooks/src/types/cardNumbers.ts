import { ErrorStatus } from "./errorStatus";

export interface CardNumbersType {
  cardNumber1: string;
  cardNumber2: string;
  cardNumber3: string;
  cardNumber4: string;
}

export const cardNumberKeys: CardNumberKeys[] = [
  "cardNumber1",
  "cardNumber2",
  "cardNumber3",
  "cardNumber4",
] as const;

export type CardNumberKeys = keyof CardNumbersType;

export type CardNumberErrorType =
  | ErrorStatus.INVALID_LENGTH
  | ErrorStatus.IS_NOT_NUMBER;
