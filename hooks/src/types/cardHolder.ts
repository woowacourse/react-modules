import { ErrorStatus } from './errorStatus';

export interface CardHolderType {
  cardHolder: string;
}

export type CardHolderErrorType =
  | ErrorStatus.ONLY_UPPERCASE
  | ErrorStatus.IS_DOUBLE_BLANK;
