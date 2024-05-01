import { ErrorStatus } from './errorStatus';

export interface PasswordType {
  password: string;
}

export type PasswordErrorType =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH;
