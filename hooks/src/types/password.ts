import { ErrorStatus } from './errorStatus';

export type PasswordError =
  | ErrorStatus.IS_NOT_NUMBER
  | ErrorStatus.INVALID_LENGTH;
