import { ErrorStatus } from './errorStatus';

export interface CVC {
  CVC: string;
}

export type cvcError = ErrorStatus.IS_NOT_NUMBER | ErrorStatus.INVALID_LENGTH;
