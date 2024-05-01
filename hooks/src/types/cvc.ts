import { ErrorStatus } from './errorStatus';

export interface CVCType {
  CVC: string;
}

export type cvcErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH;
