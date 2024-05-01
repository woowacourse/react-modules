import { ErrorStatus } from './errorStatus';

export interface CVCType {
  CVC: string;
}

export type cvcErrorType =
  | ErrorStatus.ONLY_UPPERCASE
  | ErrorStatus.IS_DOUBLE_BLANK;
