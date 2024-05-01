import { ErrorStatus } from './errorStatus';

export interface CardHolderType {
  cardHolder: string;
}

export type CardHolderErrorType =
  | ErrorStatus.ONLY_UPPERCASE
  | ErrorStatus.DOUBLE_SPACE;
