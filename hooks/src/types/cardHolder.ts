import { ErrorStatus } from './errorStatus';

export interface CardHolder {
  cardHolder: string;
}

export type CardHolderError =
  | ErrorStatus.ONLY_UPPERCASE
  | ErrorStatus.IS_DOUBLE_BLANK;
